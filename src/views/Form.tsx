import {
  Box,
  Text,
  Container,
  Heading,
  Input,
  ButtonGroup,
  Button,
  Textarea,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetFormQuery,
  useSubmitFormMutation,
} from "../app/services/formApi";
import { InputType } from "../app/services/formBuilder/formBuilder.constant";
import {
  clearForm,
  formResponseSelector,
  updateResponseInput,
} from "../app/services/formResponse";
import FormElementWrapper from "../components/FormElementWrapper";
import { useParams } from "react-router";

const Form = () => {
  const dispatch = useDispatch();
  let { formId } = useParams();

  const { data, isLoading, error } = useGetFormQuery(formId);
  const formResponse = useSelector(formResponseSelector);
  const [submitForm, { isLoading: isUpdating }] = useSubmitFormMutation();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    await submitForm({
      formId,
      response: formResponse,
    });
  };

  //   @FIXME: handler it in a better way
  if (isLoading) return <Text>Loading </Text>;
  if (error) return <Text>Something went wrong</Text>;

  const { title, description } = data;
  return (
    <Box minH="100vh" py={4} px={2} bg="gray.200">
      <Container py={6}>
        <FormElementWrapper>
          <>
            <Heading as="h1">{title}</Heading>
            {description && <Text>{description}</Text>}
          </>
        </FormElementWrapper>
        <FormControl as="form" onSubmit={handleFormSubmit}>
          {data.inputs.map((field: any, i: number) => {
            const { label, type, required } = field;
            if (
              type === InputType.ShortAnswer ||
              type === InputType.LongAnswer
            ) {
              return (
                <FormElementWrapper key={i}>
                  <>
                    <FormLabel>{label}</FormLabel>
                    {type === InputType.ShortAnswer ? (
                      <Input
                        value={formResponse?.[i] || ""}
                        onChange={(e) => {
                          dispatch(
                            updateResponseInput({
                              index: i,
                              value: e.target.value,
                            })
                          );
                        }}
                        isRequired={required}
                      />
                    ) : (
                      <Textarea
                        value={formResponse?.[i] || ""}
                        onChange={(e) => {
                          dispatch(
                            updateResponseInput({
                              index: i,
                              value: e.target.value,
                            })
                          );
                        }}
                        isRequired={required}
                      />
                    )}
                  </>
                </FormElementWrapper>
              );
            }

            return (
              <Box key={field.id}>
                <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
                <Input id={field.id} placeholder={field.placeholder} />
              </Box>
            );
          })}
          <ButtonGroup
            display="flex"
            justifyContent="end"
            variant="outline"
            spacing="6"
          >
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>

            <Button
              onClick={() => dispatch(clearForm())}
              variant="solid"
              type="button"
            >
              Clear form
            </Button>
          </ButtonGroup>
        </FormControl>
      </Container>
    </Box>
  );
};

export default Form;

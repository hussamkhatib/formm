import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Text, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateFormMutation } from "../../app/services/formApi";
import {
  allFormBuilderInputsSelector,
  createInput,
  updateTitleOrDescription,
} from "../../app/services/formBuilder/formBuilderSlice";
import FormInput from "./FormInput";
import FormBoxWrapper from "../FormElementWrapper";

const FormBuilder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // FIXME: the below selector makes the whole component re-render,
  // find a way to make it read only.
  const allFormBuilderInputs = useSelector(allFormBuilderInputsSelector);

  // const router = useRouter();
  const [createForm, { isLoading: isUpdating }] = useCreateFormMutation();

  const saveForm = async () => {
    // TODO": add toast or error state
    await createForm({
      title: allFormBuilderInputs.title,
      description: allFormBuilderInputs.description,
      formFields: allFormBuilderInputs.inputs,
    });
    navigate("/forms");
  };
  return (
    <>
      <Flex py={2} px={4} justifyContent="end">
        <Button onClick={saveForm}>save</Button>
      </Flex>
      <Box bg="gray.200">
        <Container>
          <FormBoxWrapper>
            <>
              <Input
                placeholder="Form title"
                variant="unstyled"
                fontSize="2xl"
                onChange={(e) => {
                  dispatch(
                    updateTitleOrDescription({
                      key: "title",
                      value: e.target.value,
                    })
                  );
                }}
                value={allFormBuilderInputs.title}
                defaultValue="Untitled Form"
                maxLength={50}
              />
              <Input
                variant="unstyled"
                onChange={(e) => {
                  dispatch(
                    updateTitleOrDescription({
                      key: "description",
                      value: e.target.value,
                    })
                  );
                }}
                value={allFormBuilderInputs.description}
                placeholder="Form description"
              />
            </>
          </FormBoxWrapper>
          <FormInputs />
        </Container>
      </Box>
    </>
  );
};

export default FormBuilder;

const FormInputs = () => {
  const dispatch = useDispatch();
  const allFormBuilderInputs = useSelector(allFormBuilderInputsSelector);
  return (
    <Box>
      {allFormBuilderInputs.inputs.map((formInput: any, i: number) => (
        // FIXME: DONT USE INDEX AS KEY as input can be deleted which causes inconsistent key
        <FormInput key={i} data={formInput} index={i} />
      ))}
      <Flex justifyContent="end" px={2} mb={20}>
        <Button
          display="flex"
          gap={2}
          alignItems="center"
          onClick={() => dispatch(createInput())}
          bg="white"
        >
          <Text as="span">Add new field</Text>
          <AddIcon aria-hidden />
        </Button>
      </Flex>
    </Box>
  );
};

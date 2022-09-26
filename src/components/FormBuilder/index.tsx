import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  IconButton,
  Input,
} from "@chakra-ui/react";
// import { useRouter } from "next/router";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateFormMutation } from "../../app/services/formApi";
import {
  allFormInputsSelector,
  createInput,
} from "../../app/services/formBuilder/formBuilderSlice";
import FormInput from "./FormInput";

const FormBuilder = () => {
  // FIXME: the below selector makes the whole component re-render,
  // find a way to make it read only.
  const allFormInputs = useSelector(allFormInputsSelector);

  const _title = useRef(null);
  const _description = useRef(null);

  // const router = useRouter();
  const [createForm, { isLoading: isUpdating }] = useCreateFormMutation();

  const saveForm = async () => {
    // const title = _title.current.value;
    // const description = _description.current.value;
    // if (!title) return;
    // TODO": add toast or error state
    // await createForm({
    // title,
    // description,
    // formFields: allFormInputs,
    // });
    // router.replace("/forms");
  };
  return (
    <>
      <Flex py={2} px={4} justifyContent="end">
        <Button onClick={saveForm}>save</Button>
      </Flex>
      <Box bg="gray.200">
        <Container>
          <FormBoxWrapper>
            <Input
              ref={_title}
              placeholder="Form title"
              variant="unstyled"
              fontSize="2xl"
              defaultValue="Untitled Form"
              maxLength={50}
            />
            <Input
              ref={_description}
              variant="unstyled"
              placeholder="Form description"
            />
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
  const allFormInputs = useSelector(allFormInputsSelector);
  return (
    <Box>
      {allFormInputs.map((formInput, i) => (
        // FIXME: DONT USE INDEX AS KEY
        <FormInput key={i} data={formInput} index={i} />
      ))}
      <Flex justifyContent="end" px={2} mb={20}>
        <Button
          display="flex"
          gap={2}
          alignItems="center"
          onClick={() => dispatch(createInput())}
          bg="white"
          // TODO:
          aria-label={""}
        >
          <Text as="span">Add new field</Text>
          <AddIcon aria-hidden />
        </Button>
      </Flex>
    </Box>
  );
};

export const FormBoxWrapper = ({ children }) => {
  return (
    <Box bg="white" m={2} px={4} py={8}>
      {children}
    </Box>
  );
};

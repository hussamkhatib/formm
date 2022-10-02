import { Button, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCreateFormMutation } from "../app/services/formApi";
import {
  allFormBuilderInputsSelector,
  setTemplate,
} from "../app/services/formBuilder/formBuilderSlice";
import FormBuilder from "../components/FormBuilder";

const NewForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const template = searchParams.get("template");
    dispatch(setTemplate(template));
  }, []);

  const allFormBuilderInputs = useSelector(allFormBuilderInputsSelector);

  const [createForm, { isLoading }] = useCreateFormMutation();

  const handleCreate = async () => {
    if (!allFormBuilderInputs.title) {
      toast.error("Please enter a title");
      return;
    }
    if (
      Array.isArray(allFormBuilderInputs.inputs) &&
      !allFormBuilderInputs.inputs.length
    ) {
      toast.error("Please add at least one question");
      return;
    }
    if (allFormBuilderInputs.inputs.some((input: any) => !input.label)) {
      toast.error("Please enter a label for all questions");
      return;
    }

    await createForm({
      title: allFormBuilderInputs.title,
      description: allFormBuilderInputs.description,
      inputs: allFormBuilderInputs.inputs,
    });
    toast.success("Successfully created!");
    navigate("/forms");
  };
  return (
    <FormBuilder>
      <Flex py={2} px={4} justifyContent="end">
        <Button isLoading={isLoading} onClick={handleCreate}>
          Create
        </Button>
      </Flex>
    </FormBuilder>
  );
};
export default NewForm;

import { Button, Flex } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateFormMutation } from "../app/services/formApi";
import { allFormBuilderInputsSelector } from "../app/services/formBuilder/formBuilderSlice";
import FormBuilder from "../components/FormBuilder";

const NewForm = () => {
  const navigate = useNavigate();
  const allFormBuilderInputs = useSelector(allFormBuilderInputsSelector);

  const [createForm, { isLoading: isUpdating }] = useCreateFormMutation();

  const handleCreate = async () => {
    // TODO: handle error
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
        <Button onClick={handleCreate}>Create</Button>
      </Flex>
    </FormBuilder>
  );
};
export default NewForm;

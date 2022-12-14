import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetFormQuery,
  useUpdateFormMutation,
} from "../app/services/formApi";
import FormBuilder from "../components/FormBuilder";

import { Text, Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  allFormBuilderInputsSelector,
  initForm,
} from "../app/services/formBuilder/formBuilderSlice";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const EditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { formId } = useParams();

  const allFormBuilderInputs = useSelector(allFormBuilderInputsSelector);
  const { data, isLoading, error } = useGetFormQuery(formId);
  const [updateForm, { isLoading: isUpdating }] = useUpdateFormMutation();

  useEffect(() => {
    if (data) {
      dispatch(initForm(data));
    }
  }, [data]);

  useEffect(() => {
    const beforeUnloadListener = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      return (event.returnValue = "Are you sure you want to exit?");
    };

    window.addEventListener("beforeunload", beforeUnloadListener);

    return () => {
      window.removeEventListener("beforeunload", beforeUnloadListener);
    };
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Text>Error</Text>;

  const handleUpdate = async () => {
    await updateForm({
      formId,
      body: allFormBuilderInputs,
    });
    toast.success("Successfully updated!");
    navigate("/");
  };

  return (
    <FormBuilder>
      <Flex py={2} px={4} justifyContent="end">
        <Button isLoading={isUpdating} onClick={handleUpdate}>
          update
        </Button>
      </Flex>
    </FormBuilder>
  );
};

export default EditForm;

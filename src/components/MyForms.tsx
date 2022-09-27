import { CalendarIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  useDeleteFormMutation,
  useGetUserFormsQuery,
} from "../app/services/formApi";
import { Link as ReactRouteLink, useNavigate } from "react-router-dom";
import { EditIcon } from "@chakra-ui/icons";
import toast from "react-hot-toast";
import Loader from "./Loader";

type Time = {
  _seconds: number;
  _nanoseconds: number;
};

type Form = {
  createdAt: Time;
  title: string;
  description: string;
  formId: string;
  updatedAt: Time;
  inputs: any[];
};

const MyForms = () => {
  const { data: forms, isLoading, error } = useGetUserFormsQuery();
  if (isLoading) return <Loader />;
  if (error) return <Text> error </Text>;

  if (Array.isArray(forms) && forms.length === 0)
    return <Text fontSize="xl"> No forms yet </Text>;
  return (
    <Box py={2} as="section">
      <Text as="h2" fontSize="2xl">
        My Forms
      </Text>
      {forms.map((form: Form) => {
        return <FormCard key={form.createdAt._seconds} form={form} />;
      })}
    </Box>
  );
};

export default MyForms;

const FormCard = ({ form }: { form: Form }) => {
  return (
    <Box>
      <Flex
        bg="gray.50"
        fontSize="xl"
        my={4}
        py={4}
        px={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Link
          display="flex"
          alignItems="center"
          gap={2}
          as={ReactRouteLink}
          to={`/forms/${form.formId}`}
          isExternal
        >
          <CalendarIcon />
          <Text>{form.title}</Text>
        </Link>
        <ButtonGroup spacing={4}>
          <Link as={ReactRouteLink} to={`/forms/${form.formId}/edit`}>
            <IconButton icon={<EditIcon />} aria-label="edit icon" />
          </Link>
          <DeleteForm formId={form.formId} />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

const DeleteForm = ({ formId }: { formId: string }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [deleteForm, { isLoading }] = useDeleteFormMutation();

  const handleDelete = async () => {
    await deleteForm(formId);
    toast.success("Form deleted successfully!");
    navigate("/");
    onClose();
  };
  return (
    <>
      <IconButton
        onClick={onOpen}
        isLoading={isLoading}
        colorScheme="red"
        icon={<DeleteIcon />}
        aria-label="delete icon"
      />
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Are you sure you want to delete this form. This action cannot be
            undone.
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleDelete} colorScheme="red" mr={3}>
              Delete
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

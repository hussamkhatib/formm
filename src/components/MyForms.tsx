import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useGetUserFormsQuery } from "../app/services/formApi";
import { Link as ReactRouteLink } from "react-router-dom";

const MyForms = () => {
  const { data: forms, isLoading, error } = useGetUserFormsQuery();
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text> error </Text>;

  return (
    <Box py={2} as="section">
      <Text as="h2" fontSize="2xl">
        My Forms
      </Text>
      {forms.map((form: any) => {
        return <FormCard key={form.createdAt._seconds} form={form} />;
      })}
    </Box>
  );
};

export default MyForms;

// FIXME: add types for the form data
type Props = {
  form: any;
};
const FormCard: FC<Props> = ({ form }) => {
  return (
    <Link as={ReactRouteLink} to={`/forms/${form.formId}`} isExternal>
      <Flex
        bg="gray.50"
        fontSize="xl"
        my={4}
        py={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center" gap={2}>
          <CalendarIcon />
          <Text>{form.title}</Text>
        </Flex>
        {/* TODO  */}
        {/* <Text>{form.responses} submissions</Text> */}
      </Flex>
    </Link>
  );
};

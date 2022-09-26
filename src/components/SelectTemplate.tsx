import { AddIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { Link as ReactRouteLink } from "react-router-dom";

// @TODO: add href for each tab
const templates = [
  {
    name: "Blank",
    icon: <AddIcon w={24} h={24} color="gray.500" />,
  },
  {
    name: "Contact Information",
    icon: <EmailIcon w={24} h={24} color="gray.500" />,
  },
  {
    name: "Event",
    icon: <CalendarIcon w={24} h={24} color="gray.500" />,
  },
];

const SelectTemplate = () => {
  return (
    <Box px={2} py={12}>
      <Text fontSize="2xl" mb="3">
        Start a new form
      </Text>
      <Flex gap={8}>
        {templates.map((template) => (
          <Link as={ReactRouteLink} to="/forms/new" key={template.name}>
            <Flex
              direction="column"
              alignItems="center"
              key={template.name}
              p={1}
              height={48}
              width={72}
              shadow="md"
              justifyContent="space-evenly"
              borderWidth="1px"
            >
              {template.icon}
              <Text fontSize="lg">{template.name}</Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default SelectTemplate;

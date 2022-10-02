import { AddIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const newTemplateBaseUrl = "/forms/new";
const templates = [
  {
    name: "Blank",
    icon: <AddIcon w={24} h={24} color="gray.500" />,
    path: "?template=blank",
  },
  {
    name: "Contact Information",
    icon: <EmailIcon w={24} h={24} color="gray.500" />,
    path: "?template=contact",
  },
  {
    name: "Event",
    icon: <CalendarIcon w={24} h={24} color="gray.500" />,
    path: "?template=event",
  },
];

const SelectTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box px={2} pt={6} pb={12}>
      <Text fontSize="2xl" mb="3">
        Start a new form
      </Text>
      <Flex gap={8} flexWrap="wrap" justifyContent="center">
        {templates.map((template) => (
          <Flex
            cursor="pointer"
            onClick={() => navigate(`${newTemplateBaseUrl}${template.path}`)}
            key={template.name}
            direction="column"
            alignItems="center"
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
        ))}
      </Flex>
    </Box>
  );
};

export default SelectTemplate;

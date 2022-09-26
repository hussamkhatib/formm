import { AddIcon, CalendarIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  blankTemplate,
  contactTemplate,
  eventTemplate,
} from "../app/services/formBuilder/formBuilderSlice";

// @TODO: add href for each tab
const templates = [
  {
    name: "Blank",
    icon: <AddIcon w={24} h={24} color="gray.500" />,
    action: blankTemplate,
  },
  {
    name: "Contact Information",
    icon: <EmailIcon w={24} h={24} color="gray.500" />,
    action: contactTemplate,
  },
  {
    name: "Event",
    icon: <CalendarIcon w={24} h={24} color="gray.500" />,
    action: eventTemplate,
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
      <Flex gap={8}>
        {templates.map((template) => (
          <Flex
            cursor="pointer"
            onClick={() => {
              if (template.action) dispatch(template.action());
              navigate("/forms/new");
            }}
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
          // </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default SelectTemplate;

import { Box } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

type Props = {
  children: ReactElement;
};

// @NOTE: Use this component for every box inside you want in a form
const FormElementWrapper: FC<Props> = ({ children }) => {
  return (
    <Box bg="white" m={2} px={4} py={8}>
      {children}
    </Box>
  );
};

export default FormElementWrapper;

import { Box, Container } from "@chakra-ui/react";
import NavTabs from "./NavTabs";

const MeLayout = ({ children }) => {
  return (
    <Container maxW="8xl" p={2}>
      <NavTabs />
      {children}
    </Container>
  );
};

export default MeLayout;

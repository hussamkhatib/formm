import { Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import NavTabs from "./NavTabs";

type Props = {
  children: ReactNode;
};

// @NOTE: used for dashboard and forms page
const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Container maxW="8xl" p={2}>
      <>
        <NavTabs />
        {children}
      </>
    </Container>
  );
};

export default MainLayout;

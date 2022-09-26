import { Flex, Link } from "@chakra-ui/react";
import { useLocation, Link as ReactRouteLink } from "react-router-dom";

const tabs = [
  {
    name: "Dashboard",
    href: "/",
  },
  {
    name: "Forms",
    href: "/forms",
  },
];

const NavTabs = () => {
  const { pathname } = useLocation();
  return (
    <Flex
      gap={4}
      borderBottom="1px"
      borderColor="gray.200"
      borderBottomStyle="solid"
      mb={2}
    >
      {tabs.map(({ name, href }) => (
        <Link
          to={href}
          key={name}
          as={ReactRouteLink}
          fontSize="lg"
          color={pathname === href ? "blue.500" : undefined}
        >
          {name}
        </Link>
      ))}
    </Flex>
  );
};

export default NavTabs;

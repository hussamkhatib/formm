import { Flex, Link } from "@chakra-ui/react";
import { Link as ReactRouteLink } from "react-router-dom";

const tabs = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Forms",
    href: "/forms",
  },
];

const NavTabs = () => {
  // const router = useRouter();
  return (
    <Flex
      gap={4}
      borderBottom="1px"
      borderColor="gray.200"
      borderBottomStyle="solid"
    >
      {tabs.map(({ name, href }) => (
        <Link
          to={href}
          key={name}
          as={ReactRouteLink}
          fontSize="lg"
          // @FIXME
          // color={router.asPath === href && "blue.500"}
        >
          {name}
        </Link>
      ))}
    </Flex>
  );
};

export default NavTabs;

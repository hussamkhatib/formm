import { Spinner, Box } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box w="100%" textAlign="center" pt={12}>
      <Spinner />
    </Box>
  );
};

export default Loader;

import { SyntheticEvent, useRef } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

// @NOTE: redirect to home page is not done intentionally
const Login = () => {
  const navigate = useNavigate();
  const _email = useRef<HTMLInputElement>(null!);
  const _password = useRef<HTMLInputElement>(null!);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const email = _email.current.value;
    const password = _password.current.value;
    await signInWithEmailAndPassword(email, password, () => navigate("/"));
  };

  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Heading as="h1"> Login</Heading>
      <FormControl as="form" onSubmit={handleSubmit}>
        <FormLabel>Email</FormLabel>
        <Input isRequired ref={_email} />
        <FormLabel>Password</FormLabel>
        <Input isRequired ref={_password} type="password" />
        <Button w="full" mt={4} colorScheme="blue" type="submit">
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Heading,
  Alert,
  AlertIcon,
  CloseButton,
  Spinner,
  Center,
} from "@chakra-ui/react";
import supabase from "../../config/supabase.config";
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const login = () => {
    setLoading(true);
    if (email === "" || password === "") {
      setErrors({ message: "Invalid Email or Password" });
      setLoading(false);
    } else {
      supabase.auth
        .signIn({ email, password })
        .then((response) => {
          console.log(response);
          setLoading(false);
        })
        .catch((err) => {
          setErrors(err.toString());
          setLoading(false);
        });
    }
  };
  return (
    <Container>
      <Heading as="h1">Login</Heading>
      <div style={{ marginTop: 20 }}>
        {errors?.message && (
          <div style={{ marginBottom: 20 }}>
            <Alert status="error">
              <AlertIcon />
              {errors?.message}
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setErrors({})}
              />
            </Alert>
          </div>
        )}
      </div>
      <FormControl id="email" style={{ marginTop: 30 }} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl
        id="password"
        style={{ marginTop: 30 }}
        placeholder="Enter password"
        isRequired
      >
        <FormLabel>Password</FormLabel>
        <Input
          type="Password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      {!loading ? (
        <Button
          style={{ marginTop: 20, backgroundColor: "black", color: "white" }}
          onClick={login}
        >
          Login
        </Button>
      ) : (
        <Center style={{ marginTop: 25 }}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}
    </Container>
  );
};

export default SignUpForm;

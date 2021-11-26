import React, { useState, useEffect } from "react";
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
  Flex,
} from "@chakra-ui/react";
import supabase from "../../config/supabase.config";
import { useHistory,Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
const SignUpForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const setUser = useStoreActions((actions) => actions.setUser);
  const history = useHistory();
  
  const login = async () => {
    setLoading(true);
    if (email === "" || password === "") {
      setErrors({ message: "Invalid Email or Password" });
      setLoading(false);
    } else {
      const { data, error } = await supabase.auth.signIn({ email, password });
      if (error) {

        setErrors({ message: error.message });
        setLoading(false);
      } else if (data.user) {
        setUser(data.user);
        window.location.href = "/";
        setLoading(false);
      }
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
        <Flex alignItems="center" mt={4}>
        <Button
          style={{  backgroundColor: "black", color: "white" }}
          onClick={login}
        >
          Login
        </Button>
        <Link style={{marginLeft:14}} to="/signup" >Don't have an account? Sign Up</Link>
        </Flex>
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

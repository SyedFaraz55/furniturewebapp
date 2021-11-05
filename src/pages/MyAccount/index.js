import { Container,Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
const MyAccount = () => {
  const [value, setChange] = useState(true);
  return (
    <Container>
     <h1>Account </h1> 
    </Container>
  );
};

export default MyAccount;

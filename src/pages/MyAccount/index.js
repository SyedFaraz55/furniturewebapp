import { Container,Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
const MyAccount = () => {
  const [value, setChange] = useState(true);
  return (
    <Container>
      {value ? <LoginForm /> : <SignUpForm />}
      <div>
        <Flex style={{marginTop:20}}>
          <Link to="/account" style={{marginRight:10}} onClick={() => setChange(!value)}>
            Create an account
          </Link> |
          <Link to="/account" style={{marginLeft:10}} onClick={() => alert('resetting password')}>
            Forgot Password ?
          </Link>
        </Flex>
      </div>
    </Container>
  );
};

export default MyAccount;

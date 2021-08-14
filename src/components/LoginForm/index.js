import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    Link,
    Heading,
  } from "@chakra-ui/react";

const LoginForm = ()=> {
    return ( <div>
        <Heading as="h1">Login</Heading>
        <FormControl id="name" style={{ marginTop: 30 }} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="Email" />
        </FormControl>
        <FormControl id="password" style={{ marginTop: 30 }} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="Password" />
        </FormControl>
        <Button  style={{marginTop:20,backgroundColor:"black", color:"white"}}>Login</Button>
      </div>)
}

export default LoginForm;
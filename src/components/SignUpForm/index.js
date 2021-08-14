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

const SignUpForm = ()=> {
    return ( <div>
        <Heading as="h1">Sign Up</Heading>
        <FormControl id="name" style={{ marginTop: 30 }} isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" style={{ marginTop: 30 }} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="Email" />
        </FormControl>
        <FormControl id="password" style={{ marginTop: 30 }} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="Password" />
        </FormControl>
        <Button  style={{marginTop:20,backgroundColor:"black", color:"white"}}>Signup</Button>
      </div>)
}

export default SignUpForm;
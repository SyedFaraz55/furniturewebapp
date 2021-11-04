import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  const styles = {
    textAlign: "center",
    marginTop: 50,
    heading: {
      fontSize: 25,
      fontWeight: 600,
      marginBottom: 10,
    },
  };
  return (
    <Container>
      <div style={styles}>
        <Heading as="h5" style={{ marginBottom: 15 }}>
          Contact Us
        </Heading>
        <p>
          We are here to help! Just send us an email, call us or use the form
          below to get in touch. Our office hours are 10 am - 5 pm GMT+1 (6 am -
          11 am ET).
        </p>
      </div>
      <div>
        <FormControl id="name" style={{ marginTop: 30 }} isRequired>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl id="email" style={{ marginTop: 30 }}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="contact" style={{ marginTop: 30 }} isRequired>
          <FormLabel>Contact Number</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="Message" style={{ marginTop: 30 }}>
          <FormLabel>Message</FormLabel>
          <Textarea rows="10" cols="10" />
        </FormControl>
        <Button
          style={{ marginTop: 10, backgroundColor: "black", color: "white" }}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default Contact;

import React from "react";
import { Divider, Container, Heading } from "@chakra-ui/react";
const PageHeader = ({ title }) => {
  return (
    <>
      <Divider />
      <Container centerContent>
        <Heading padding={5} Crafft Products as="h2">
          {title}
        </Heading>
      </Container>
      <Divider />
    </>
  );
};
export default PageHeader;

import { Box, Center, Heading, Spinner } from "@chakra-ui/react";
import React from "react";

const Success = () => {
  React.useEffect(() => {
    setTimeout(() => {
      window.location.href = "/account";
    }, 2000);
  }, []);
  return (
    <Box p={10}>
      <Center>
        <Heading as="h5">Please wait, while we redirect</Heading>
        <Spinner size="lg" style={{ marginLeft: 10 }} />
      </Center>
    </Box>
  );
};

export default Success;

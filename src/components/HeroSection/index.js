import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    console.log(localStorage.getItem("uuid"));
  });
  return (
    <div style={{ padding: 10 }}>
      <Flex height="60vh">
        <Box p={10} bg="blackAlpha.200" minW="50%" className="hero-left">
          <Box className="content">
            <Text className="p-badge">New Collection</Text>
            <h2>
              Fill your home
              <br />
              with uniqueness
            </h2>
            <h3 className="sub-title">Huge variety with modern glamour! </h3>
          </Box>
        </Box>
        <Box minW="50%" className="hero-right "></Box>
      </Flex>
    </div>
  );
};

export default HeroSection;

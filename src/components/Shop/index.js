import React from "react";
import {
  Center,
  Box,
  Container,
  Divider,
  Heading,
  Select,
  Flex,
  Text,
} from "@chakra-ui/react";
const Shop = () => {
  return (
    <>
      <Container centerContent>
        <Heading mt={10} mb={10} Crafft Products as="h2">
          Crafft Products
        </Heading>
      </Container>
      <Divider />
      <Box padding={3} marginLeft={100}>
        <Flex alignItems="center">
          <Text mr={5}>FILTER BY</Text>
          <Select width={200} placeholder="All Products">
            <option value="option1">6 Seater Sofa</option>
            <option value="option2">5 Seater Sofa</option>
            <option value="option3">Dining Tables</option>
            <option value="option3">Office Desk</option>
          </Select>
          <Box padding={3} marginLeft={5}>
            <Flex alignItems="center">
              <Text mr={5}>SORT BY</Text>
              <Select width={200} placeholder="All Products">
                <option value="option1">Rating</option>
                <option value="option3">Price Low to high</option>
                <option value="option3">Price high to low</option>
              </Select>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Divider />
    </>
  );
};

export default Shop;

import React from "react";
import { Box, Flex, Text, Select, Divider } from "@chakra-ui/react";
const Filter = () => {
  return (
    <>
      <Box padding={2} marginLeft={100}>
        <Flex alignItems="center">
          <Box>
            <Flex alignItems="center">
              <Text mr={5}>FILTER BY</Text>
              <Select width={200} placeholder="All Products">
                <option value="beds">Beds</option>
                <option value="6-seater">6 Seater Sofa</option>
                <option value="5-seater">5 Seater Sofa</option>
                <option value="dining-table">Dining Tables</option>
                <option value="office-desk">Office Desk</option>
                <option value="dressing-table">Dressing Table</option>
                <option value="table-chair">Tables & chairs</option>
                <option value="l-shape">L Shape sofa sets</option>
              </Select>
            </Flex>
          </Box>
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

export default Filter;

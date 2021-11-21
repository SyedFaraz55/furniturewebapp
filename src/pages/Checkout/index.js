import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  Divider,
  Input,
  InputGroup,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import { useCart } from "react-use-cart";
const CheckOut = () => {
  const [subTotal, setSubTotal] = React.useState(0);
  const { items, removeItem } = useCart();
  React.useEffect(() => {
    const total = items.reduce((prev, curVal) => {
      return (prev += curVal.itemTotal);
    }, 0);
    setSubTotal(total);
  }, [items]);
  return (
    <>
      <Divider />
      <Flex justifyContent="space-between">
        <Box padding={10}>
          <Box>
            <Text fontSize="2xl">Contact Info</Text>
            <InputGroup>
              <Input placeholder="Email address" width={360} mt={2} mr={3} />
              <Input placeholder="Mobile Number" width={360} mt={2} />
            </InputGroup>
          </Box>
          {/* shipping */}
          <Box mt={6}>
            <Text fontSize="2xl">Shipping Address</Text>
            <InputGroup>
              <Input placeholder="First Name" width={360} mt={4} mr={3} />
              <Input placeholder="Last Name" width={360} mt={2} />
            </InputGroup>
            <InputGroup>
              <Input placeholder="Address" width={360} mt={4} mr={3} />
              <Input placeholder="Apartment,suite,etc" width={360} mt={2} />
            </InputGroup>
            <InputGroup>
              <Input placeholder="City" width={360} mt={4} mr={3} />
              <Input placeholder="Pincode" width={360} mt={2} />
            </InputGroup>
            <InputGroup>
              <Select placeholder="Country" width={360} mt={4} mr={3}>
                <option value="india">India</option>
              </Select>
              <Select placeholder="State" width={360} mt={4} mr={3}>
                <option value="tel">Telangana</option>
                <option value="tel">Andhra</option>
                <option>Delhi</option>
              </Select>
            </InputGroup>
            <Checkbox mt={3}>Save this information for next time</Checkbox>
            <br />
            <Button variant="solid" size="lg" mt={4}>
              Continue to Shipping
            </Button>
          </Box>
        </Box>
        <Box
          borderLeft="1px"
          borderColor="blackAlpha.100"
          backgroundColor="blackAlpha.100"
          padding={4}
        >
          <Heading as="h5" size="md">
            Total Rs.{" "}
            {subTotal.toLocaleString(navigator.language, {
              minimumFractionDigits: 2,
            })}
          </Heading>
          <Text mt={2}>Shipping : Free</Text>
          {items &&
            items.map((product) => {
              return (
                <Box
                  border="1px"
                  borderColor="blackAlpha.300"
                  padding={3}
                  borderRadius="md"
                  mt={5}
                  width={500}
                >
                  <Flex>
                    <Image
                      src={product.image}
                      alt={product.name}
                      boxSize="100px"
                    />
                    <Box>
                      <Heading ml={6} size="md">
                        {product.name}
                      </Heading>
                      <Flex alignItems="center" mt={2} ml={6}>
                        <BiRupee />
                        <Text>
                          {product.itemTotal.toLocaleString(
                            navigator.language,
                            {
                              minimumFractionDigits: 2,
                            }
                          )}
                        </Text>
                      </Flex>
                      <Text ml={6}>quantity : {product.quantity}</Text>
                      <Button
                        variant="link"
                        onClick={() => removeItem(product.id)}
                        mt={4}
                        ml={6}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              );
            })}
        </Box>
      </Flex>
    </>
  );
};

export default CheckOut;

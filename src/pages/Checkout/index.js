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
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import { useCart } from "react-use-cart";
import { Formik } from "formik";
import StripeCheckout from "react-stripe-checkout";

const CheckOut = () => {
  const [subTotal, setSubTotal] = React.useState(0);
  const { items, removeItem } = useCart();
  const handleSubmit = async (e, values) => {
    e.preventDefault();
  };
  const onToken = (token) => {
    console.log(token, "token");
  };

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
          <Formik
            initialValues={{
              email: "",

              fname: "",
              lname: "",
              address: "",
              appartment: "",
              city: "",
              mobile: "",
              country: "",
              state: "",
              save: false,
            }}
          >
            {({ handleChange, values }) => (
              <form onSubmit={(e) => handleSubmit(e, values)}>
                <Box>
                  <Text fontSize="2xl" mb={5}>
                    Contact Info
                  </Text>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <Input
                        name="email"
                        required
                        type="email"
                        placeholder="Enter Email "
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>
                </Box>
                {/* shipping */}
                <Box mt={6}>
                  <Text fontSize="2xl" mb={5}>
                    Shipping Address
                  </Text>
                  <Flex mb={5}>
                    <FormControl id="fname" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <InputGroup>
                        <Input
                          width={350}
                          required
                          type="text"
                          placeholder="Enter First Name "
                          name="fname"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="lname" isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <InputGroup>
                        <Input
                          width={350}
                          required
                          type="text"
                          placeholder="Enter Last Name"
                          name="lname"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>
                  </Flex>
                  <Flex mb={5}>
                    <FormControl id="address" isRequired>
                      <FormLabel>Address</FormLabel>
                      <InputGroup>
                        <Input
                          width={350}
                          required
                          type="text"
                          placeholder="Enter Address"
                          name="address"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="appartment" isRequired>
                      <FormLabel>Appartment</FormLabel>
                      <InputGroup>
                        <Input
                          width={350}
                          required
                          type="text"
                          placeholder="Enter Appartment,locality,landmark"
                          name="appartment"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>
                  </Flex>
                  <Flex mb={5}>
                    <FormControl id="city" isRequired>
                      <FormLabel>City</FormLabel>
                      <InputGroup>
                        <Input
                          width={350}
                          required
                          type="text"
                          placeholder="Enter City"
                          name="city"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="phone" isRequired>
                      <FormLabel>Mobile Number</FormLabel>
                      <InputGroup>
                        <Input
                          width={350}
                          required
                          type="text"
                          placeholder="Enter Mobile number"
                          name="mobile"
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </FormControl>
                  </Flex>
                  <Flex mb={5}>
                    <FormControl isRequired>
                      <FormLabel>Country</FormLabel>
                      <InputGroup>
                        <Select
                          onChange={handleChange}
                          name="country"
                          placeholder="Country"
                          width={350}
                          mr={4}
                        >
                          <option value="india">India</option>
                        </Select>
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>State</FormLabel>
                      <InputGroup>
                        <Select
                          name="state"
                          onChange={handleChange}
                          placeholder="State"
                          width={350}
                        >
                          <option value="tel">Telangana</option>
                          <option value="tel">Andhra</option>
                          <option>Delhi</option>
                        </Select>
                      </InputGroup>
                    </FormControl>
                  </Flex>

                  <Checkbox onChange={handleChange} name="save" mt={3}>
                    Save this information for next time
                  </Checkbox>
                  <br />
                  <Button type="submit" variant="solid" size="lg" mt={4}>
                    Continue to Shipping
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
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
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_DfpfAn6i3etX3z61vcAsCGcj"
        name="Craftt Furniture"
        amount={subTotal * 100}
        currency="INR"
      />
    </>
  );
};

const Payout = () => {
  return <CheckOut />;
};

export default Payout;

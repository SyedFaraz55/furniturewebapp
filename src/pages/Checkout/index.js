import React, { useState } from "react";
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
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import { useCart } from "react-use-cart";
import { Formik } from "formik";
import axios from "axios";

const CheckOut = () => {
  const [subTotal, setSubTotal] = React.useState(0);
  const { items, removeItem } = useCart();
  const [user, setUser] = useState(null);
  const [details, setDetails] = React.useState();
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);
  const handleSubmit = (e, values) => {
    setDetails(values);
    e.preventDefault();
    if (
      values.email === "" ||
      values.fname === "" ||
      values.address === "" ||
      values.city === "" ||
      values.mobile === "" ||
      values.state === ""
    ) {
      alert("required");
    } else {
      displayRazorPay();
    }
  };

  const loadRazorPay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorPay = async () => {
    const res = await loadRazorPay();
    if (!res) {
      alert("SDK failed to load");
      return;
    }
    const data = await axios
      .post("https://mysterious-falls-52128.herokuapp.com/razorpay", {
        amount: subTotal,
        items: items,
        name: details?.fname,
        mobile: details?.mobile,
        city: details?.city,
        email: user.email,
        userid: user.id,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err.toString()));
    console.log(data, "data");
    var options = {
      key: "rzp_test_LkuPPQeixSkEX2",
      amount: data.amount,
      currency: data.currency,
      name: "Craftt Furniture",
      test: "match",
      description: "Craftt Furniture Transaction",
      order_id: data.id,
      userid: localStorage.getItem("user").id,
      handler: function (response) {
        window.location.href = "/success";
      },
    };

    const payment = new window.Razorpay(options);
    payment.open();
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
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
            }}
          >
            {({ handleChange, values, errors }) => (
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

                  {/* <Checkbox onChange={handleChange} name="save" mt={3}>
                    Save this information for next time
                  </Checkbox> */}
                  <br />
                  <Button type="submit" variant="solid" size="lg">
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

      {/* <StripeCheckout
        token={onToken}
        stripeKey="pk_live_51Jy9uMSIaBscaTWfm8dAukzQyZhEP5YWWMioFl1EFjcMblSFHAh2SV2emxg6vINjVdDCIiJKAeT102IyGu0baJgT00yfQxwsN3"
        name="Craftt Furniture"
        amount={1 * 100}
        currency="INR"
      /> */}
    </>
  );
};

const Payout = () => {
  return <CheckOut />;
};

export default Payout;

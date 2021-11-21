import { Box, Container, Heading, Flex } from "@chakra-ui/layout";
import { Image, Text, Button, Link, Divider } from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
const Cart = () => {
  const { totalItems, items, updateItemQuantity, removeItem, isEmpty } =
    useCart();
  const [error, setErrors] = useState({});
  const [subtotal, setSubTotal] = useState(0);
  useEffect(() => {
    const total = items.reduce((prev, curVal) => {
      return (prev += curVal.itemTotal);
    }, 0);
    setSubTotal(total);
  }, [items]);

  const checkOut = () => {
    if (localStorage.getItem("supabase.auth.token")) {
      window.location.href = "/checkout";
    } else {
      setErrors({ message: "Please login to continue" });
    }
  };

  if (isEmpty) {
    return (
      <Container centerContent>
        <Heading>Your cart is empty</Heading>
        <Link href="/shop" mt={4} variant="link">
          Continue Shopping
        </Link>
      </Container>
    );
  }

  return (
    <Box>
      <Container>
        <Heading as="h4">Your Cart ({totalItems})</Heading>
        <Box mt={18}>
          {items &&
            items.map((product) => {
              return (
                <Box
                  border="1px"
                  borderColor="blackAlpha.400"
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
                        <Text>{product.price}</Text>
                      </Flex>
                      <Flex alignItems="center" mt={2} ml={6}>
                        <Button
                          borderRadius="full"
                          color="blackAlpha.900"
                          size="xs"
                          onClick={() => {
                            updateItemQuantity(
                              product.id,
                              product.quantity + 1
                            );
                          }}
                        >
                          <IoIosAdd size={15} />
                        </Button>{" "}
                        <Text ml={2} mr={2}>
                          {product.quantity}
                        </Text>
                        <Button
                          borderRadius="full"
                          color="blackAlpha.900"
                          size="xs"
                          onClick={() =>
                            updateItemQuantity(product.id, product.quantity - 1)
                          }
                        >
                          <AiOutlineMinus size={15} />
                        </Button>
                      </Flex>
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
                  <Flex mt={4} justifyContent="flex-end" alignItems="center">
                    <Flex alignItems="center" mt={2} ml={6}>
                      <BiRupee />
                      <Text>
                        {product.itemTotal.toLocaleString(navigator.language, {
                          minimumFractionDigits: 2,
                        })}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              );
            })}
          <Divider mt={20} />
          <Flex alignItems="center" justifyContent="space-between" padding={2}>
            <Text>
              Subtotal: Rs.{" "}
              {subtotal.toLocaleString(navigator.language, {
                minimumFractionDigits: 2,
              })}
            </Text>
            <Button onClick={checkOut}>Check Out</Button>
          </Flex>
          <Divider />
          {error?.message && (
            <Alert status="info">
              <AlertIcon />
              <AlertTitle mr={2}>Please login to continue</AlertTitle>
              <Link ml={10} href="/login">
                Login
              </Link>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          )}
        </Box>
      </Container>
    </Box>
  );
};
export default Cart;

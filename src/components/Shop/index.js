import React, { useEffect } from "react";

import PageHeader from "../../Common/PageHeader";
import Filter from "../../Common/Filter";
import { Box, Heading } from "@chakra-ui/layout";
import {
  useToast,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Text,
  Button,
  Divider,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useCart } from "react-use-cart";
import ProductCard from "../ProductCard";
import product1 from "../../resources/products/product1.jpeg";
import product2 from "../../resources/products/product2.jpeg";
import product3 from "../../resources/products/product3.jpeg";
import product4 from "../../resources/products/product4.jpeg";
import product5 from "../../resources/products/product5.jpeg";
import product6 from "../../resources/products/product6.jpeg";
import product7 from "../../resources/products/product7.jpeg";
import product8 from "../../resources/products/product8.jpeg";
import Commerce from "@chec/commerce.js";
const commerce = new Commerce(
  "pk_test_36356e81ff0bc6c1d6f99e5eccc2450557146ccab646f"
);

const products = [
  {
    id: 1,
    name: "Grey and black moshi fabric",
    price: 1,
    image: product1,
    category: "sofa",
  },
  {
    id: 2,
    name: "L-Shape Six Seater",
    price: 20500,
    image: product2,
    category: "sofa",
  },
  {
    id: 3,
    name: "Moshi or jute fabric 5 seater",
    price: 10000,
    image: product3,
    category: "sofa",
  },
  {
    id: 4,
    name: "Grey and black moshi fabric",
    price: 17999,
    image: product4,

    category: "sofa",
  },
  {
    id: 5,
    name: "Grey and black moshi fabric",
    price: 10000,
    image: product5,

    category: "sofa",
  },
  {
    id: 6,
    name: "4 Chair dining table",
    price: 19500,
    image: product6,
    category: "dinning table",
  },
  {
    id: 7,
    name: "4 Chair dining table",
    price: 19500,
    image: product7,

    category: "dinning table",
  },
  {
    id: 8,
    name: "4 Chair dining table",
    price: 22500,
    image: product8,

    category: "dinning table",
  },
];
const Shop = () => {
  const [size, setSize] = React.useState("full");
  const [current, setCurrent] = React.useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { addItem, items } = useCart();
  const toast = useToast();

  useEffect(() => {
    console.log(items);
    commerce.products.list().then((product) => console.log(product));
    setSize("full");
  }, [items]);

  // const handleSubmit = () => {
  //   console.log("hit ");
  // };

  return (
    <div>
      <PageHeader title="Craftt Shop" />
      <Filter />
      <Box id="featured" padding={5}>
        {products.map((product) => {
          return (
            <ProductCard
              cart={true}
              onClick={() => {
                onOpen();
                setCurrent(product);
              }}
              key={product._id}
              {...product}
              addCart={() => {
                addItem(product);
                toast({
                  position: "bottom-left",
                  title: "Product added to cart",
                  status: "success",
                  isClosable: true,
                });
              }}
            />
          );
        })}
      </Box>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent padding={6}>
          <DrawerBody mt={10}>
            <Flex>
              <Box>
                <img
                  style={{ width: 600 }}
                  src={current.image}
                  alt={current.name}
                />
              </Box>
              <Box ml={10}>
                <Heading as="h5">{current.name}</Heading>
                <Text mt={2} style={{ fontSize: 24 }}>
                  Rs.{" "}
                  {current?.price?.toLocaleString(navigator.language, {
                    minimumFractionDigits: 2,
                  })}
                </Text>

                <Button
                  onClick={() => {
                    if (items.indexOf(current) > -1) {
                      addItem(current);
                      toast({
                        title: "Item added to cart",
                        status: "success",
                      });
                    } else {
                      toast({
                        title: "Item already in cart",
                        status: "error",
                      });
                    }
                  }}
                  mt={5}
                  variant="outline"
                >
                  Add to Cart
                </Button>
                <Text mt={3} fontSize={25} mb={3}>
                  Description
                </Text>
                <Divider />
                <Box width={650}>
                  <Text mt={3}>
                    Everyone needs a nook of one’s own, and our lovable
                    high-backed chair is just that. Rolled arms and a curvy
                    frame give a wink of personality, while a soft seat cushion
                    invites you to stay a while.
                  </Text>
                  <UnorderedList mt={4}>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Shop;

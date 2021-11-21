import React from "react";

import PageHeader from "../../Common/PageHeader";
import Filter from "../../Common/Filter";
import { Box } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
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
const products = [
  {
    id: 1,
    name: "Grey and black moshi fabric",
    price: 19600,
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
  const { addItem } = useCart();
  const toast = useToast();
  return (
    <div>
      <PageHeader title="Craftt Shop" />
      <Filter />
      <Box id="featured" padding={5}>
        {products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              {...product}
              onClick={() => {
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
    </div>
  );
};

export default Shop;

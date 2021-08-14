import React from "react";
import ProductInfo from "../ProductInfo";

const ProductCard = ({ image }) => {
  return (
    <div>
      <img src={image} alt="sofa furniture" width="100%" />
      <ProductInfo />
    </div>
  );
};
export default ProductCard;

import React from "react";
import ProductInfo from "../ProductInfo";

const ProductCard = ({ image, name, price, addCart, onClick }) => {
  console.log(image, name, price);
  return (
    <div style={{ margin: 10, cursor: "pointer" }} onClick={onClick}>
      <img src={image} alt={name} style={{ width: "100%", height: 340 }} />
      <ProductInfo name={name} price={price} onClick={addCart} />
    </div>
  );
};
export default ProductCard;

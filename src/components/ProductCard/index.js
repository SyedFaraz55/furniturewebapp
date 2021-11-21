import React from "react";
import ProductInfo from "../ProductInfo";

const ProductCard = ({ image, name, price, onClick }) => {
  console.log(image, name, price);
  return (
    <div style={{ margin: 10 }}>
      <img src={image} alt={name} style={{ width: "100%", height: 340 }} />
      <ProductInfo name={name} price={price} onClick={onClick} />
    </div>
  );
};
export default ProductCard;

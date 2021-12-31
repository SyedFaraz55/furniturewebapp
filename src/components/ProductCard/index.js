import React from "react";
import ProductInfo from "../ProductInfo";

const ProductCard = ({ image, name, price, addCart, onClick, cart }) => {
  console.log(image, name, price);
  return (
    <div style={{ margin: 10, cursor: "pointer" }} onClick={onClick}>
      <img src={image} alt={name} style={{ width: "100%", height: 340 }} />
      {cart ? (
        <ProductInfo name={name} price={price} onClick={addCart} />
      ) : null}
    </div>
  );
};
export default ProductCard;

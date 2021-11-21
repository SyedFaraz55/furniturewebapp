import React from "react";
import { BiRupee } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

const ProductInfo = ({ name, price, onClick }) => {
  return (
    <div className="p-grid" style={{ marginTop: 10 }}>
      <div>
        <p className="p-title">{name}</p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <BiRupee />
          <span>
            {price?.toLocaleString(navigator.language, {
              minimumFractionDigits: 2,
            })}
          </span>
        </p>
      </div>
      <div className="cart-button" onClick={onClick}>
        <CgShoppingCart id="cart-icon" />
      </div>
    </div>
  );
};

export default ProductInfo;

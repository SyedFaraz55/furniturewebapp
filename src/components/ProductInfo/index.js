import React from "react";
import { BiRupee } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

const ProductInfo = () => {
  return (
    <div className="p-grid" style={{marginTop:10}}>
      <div>
        <p className="p-title">L-Shape Sofa</p>
        <p className="row" >
          <span >
            <BiRupee />
          </span>
          <span>12,000</span>
        </p>
      </div>
      <div className="cart-button">
        <CgShoppingCart id="cart-icon" />
      </div>
    </div>
  );
};

export default ProductInfo;

import React from "react";
import ProductCard from "../ProductCard";
import p6 from "../../resources/new_products/p6.jpeg";
import p7 from "../../resources/new_products/p7.jpeg";
import p8 from "../../resources/new_products/p8.jpeg";
import p9 from "../../resources/new_products/p9.jpeg";
const Featured = () => {
  return (
    <div className="tagline">
      <div>
        <h3>Great deals for great prices</h3>
      </div>
      <div id="featured">
        <ProductCard
          price={1700}
          image={p9}
          onClick={() => (window.location.href = "/shop")}
        />
        <ProductCard price={1700} image={p8} />
        <ProductCard price={1700} image={p7} />
        <ProductCard price={1700} image={p6} />
      </div>
    </div>
  );
};
export default Featured;

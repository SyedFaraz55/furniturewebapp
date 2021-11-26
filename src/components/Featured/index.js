import React from "react";
import ProductCard from "../ProductCard";
import p1 from "../../resources/new_products/p1.jpeg";
import p2 from "../../resources/new_products/p2.jpeg";
import p4 from "../../resources/new_products/p4.jpeg";
import p5 from "../../resources/new_products/p5.jpeg";
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
        <ProductCard price={1700} image={p9} />
        <ProductCard price={1700} image={p8} />
        <ProductCard price={1700} image={p7} />
        <ProductCard price={1700} image={p6} />
        <ProductCard price={1700} image={p2} />
        <ProductCard price={1700} image={p5} />
        <ProductCard price={1700} image={p4} />
        <ProductCard price={1700} image={p1} />
      </div>
    </div>
  );
};
export default Featured;

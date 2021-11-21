import React from "react";
import ProductCard from "../ProductCard";

const Featured = () => {
  return (
    <div className="tagline">
      <div>
        <h3>Great deals for great prices</h3>
      </div>

      <div id="featured">
        <ProductCard
          price={1700}
          image="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0011_jeremy-lwanga-uUwEAW5jFLE-unsplash-300x300.jpg"
        />
        <ProductCard
          price={1700}
          image="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0010_sincerely-media-VDPauwJ_sHo-unsplash-300x300.jpg"
        />
        <ProductCard
          price={1700}
          image="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0009_minh-pham-Wn1gmozpNZc-unsplash-300x300.jpg"
        />
        <ProductCard
          price={1700}
          image="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0008_minh-pham-7pCFUybP_P8-unsplash-300x300.jpg"
        />
        <ProductCard
          price={1700}
          image="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0007_christopher-burns-56tCOHi5OzA-unsplash-300x300.jpg"
        />
        <ProductCard
          price={1700}
          image="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0006_kari-shea-3_cyj5YkhTs-unsplash-300x300.jpg"
        />
        <ProductCard
          price={1700}
          image="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0005_stephanie-harvey-80xePqQVKzs-unsplash-300x300.jpg"
        />
        <ProductCard
          price={1700}
          image="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/5559331632_2_1_1_0004_bedroom-bulb-interior-decoration-lamp-545048-300x300.jpg"
        />
      </div>
    </div>
  );
};
export default Featured;

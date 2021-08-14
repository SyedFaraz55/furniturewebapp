import React from "react";
import sofa from "../../resources/sofa6.jpg";
import sofa2 from "../../resources/sofa2.jpg";
import sofa3 from "../../resources/sofa3.jpg";
import { Link } from "@chakra-ui/react";

export default function index() {
  return (
    <div className="tagline">
      <div>
        <h3>
          <span>
            Gorgeous collection to choose from. We picked every item with care
          </span>
          <span> you must try atleast once in your lifetime</span>
        </h3>
      </div>

      <div id="showcase" className="row sbt">
        <div>
          <img src={sofa} alt="sofa furniture" height={400} />
          <p>Start your shopping by categories</p>
          <Link>Go to Categories</Link>
        </div>
        <div>
        <img src={sofa} alt="sofa furniture" height={400} />
          <p>Don’t waste your time, just go to shop and start buying</p>
          <Link>Our Shop</Link>
        </div>
        <div>
        <img src={sofa} alt="sofa furniture" height={400} />
          <p>Design Custom Furniture for your home</p>
          <Link>Craft your custom furniture</Link>
        </div>
      </div>
    </div>
  );
}

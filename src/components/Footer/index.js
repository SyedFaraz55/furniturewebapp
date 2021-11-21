import React from "react";
import * as ICON from "react-icons/fi";
const Footer = ({ location }) => {
  if (
    location?.pathname === "/login" ||
    location?.pathname === "/cart" ||
    location?.pathname === "/checkout"
  ) {
    return null;
  }
  return (
    <footer>
      <div className="f_contact">
        <h3>Contact</h3>
        <ul>
          <li>+112 345 6789</li>
          <li>1316 Abbot Kinney Blvd. Copenhagen CA 90291</li>
          <li style={{ display: "flex" }}>
            <ICON.FiFacebook style={{ marginRight: 10 }} fontSize={20} />
            <ICON.FiInstagram style={{ marginRight: 10 }} fontSize={20} />
            <ICON.FiTwitter fontSize={20} />
          </li>
        </ul>
      </div>
      <div className="f_contact">
        <h3>Help</h3>
        <ul>
          <li>FAQs</li>
          <li>Pricing Plans</li>
          <li>Track</li>
          <li>Your Order</li>
          <li>My Account</li>
        </ul>
      </div>
      <div className="f_contact">
        <h3>Customer Service</h3>
        <ul>
          <li>My Account</li>
          <li>Deliveries & Returns</li>
          <li>Gift Card</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

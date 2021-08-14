import React from "react";
import { GiWorld } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import {FaRegCreditCard} from 'react-icons/fa'
import * as ICON from 'react-icons/gi';
export default function index() {
  return (
    <div className="info-section">
      <div className="iconbox">
        <p><GiWorld color="white" fontSize={40} /></p>
        <p>24H SERVICE </p>
      </div>
      <div className="iconbox">
        <FiTruck color="white" fontSize={40} />
        <p>Free Delivery </p>
      </div>
      <div className="iconbox">
        <FaRegCreditCard color="white" fontSize={40} />
        <p>Order Tracking </p>
      </div>
    </div>
  );
}

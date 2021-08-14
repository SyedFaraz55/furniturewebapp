import React from "react";

import HeroSection from "./HeroSection";
import ShowCase from "./ShowCase";
import Featured from "./Featured";
import InfoSection from "./InfoSection";

import Footer from "./Footer";

import "../style.css";
const App = () => {
  return (
    <>
      <HeroSection />
      <ShowCase />
      <Featured />
      <InfoSection />
      <Footer />
    </>
  );
};

export default App;

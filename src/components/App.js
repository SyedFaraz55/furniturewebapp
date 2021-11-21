import React from "react";

import HeroSection from "./HeroSection";
import ShowCase from "./ShowCase";
import Featured from "./Featured";
import InfoSection from "./InfoSection";

import { useStoreState } from "easy-peasy";
import "../style.css";

const App = () => {
  const user = useStoreState((state) => state.user);
  console.log(user, "from store >>");
  return (
    <>
      <HeroSection />
      <ShowCase />
      <Featured />
      <InfoSection />
    </>
  );
};

export default App;

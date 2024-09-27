import React from "react";
import Slider from "../../components/Slider";
import Services from "../../components/Services";
const homePage = () => {
  return (
    <div className="min-h-screen w-full mx-auto flex flex-col">
      <Slider />
      <Services />
    </div>
  );
};

export default homePage;

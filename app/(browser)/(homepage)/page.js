import React from "react";
import Slider from "../../components/Slider";
import Services from "../../components/Services";
import Ventilation from "../../components/Ventilation";
import Policies from "../../components/Policies";

const homePage = () => {
  return (
    <div className="min-h-screen w-full mx-auto flex flex-col">
      <Slider />
      <Services />
      <Ventilation />
      <Policies />
    </div>
  );
};

export default homePage;

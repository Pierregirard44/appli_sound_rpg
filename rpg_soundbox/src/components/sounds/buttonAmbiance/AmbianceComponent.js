import React from "react";
import ButtonBeerPouring from "./ButtonBeerPouring";
import ButtonTavernTrend from "./ButtonTavernTrend";

const AmbianceAll = () => {
  return (
    <>
      <h2 id="titleCategory">Atmosphere</h2>
      <button id="containerButton"> 
        <ButtonTavernTrend /> 
        <ButtonBeerPouring /> 
      </button>
    </>
  );
};

export default AmbianceAll;

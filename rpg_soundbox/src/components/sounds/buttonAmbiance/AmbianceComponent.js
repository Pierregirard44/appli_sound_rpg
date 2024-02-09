import React from "react";
import ButtonBeerPouring from "./ButtonBeerPouring";
import ButtonTavernTrend from "./ButtonTavernTrend";

const AmbianceAll = () => {
  return (
    <div>
      <h2 id="titleCategory">Atmosphere</h2>
      <div id="containerButton">
        <ButtonTavernTrend />
        <ButtonBeerPouring />
      </div>
    </div>
  );
};

export default AmbianceAll;

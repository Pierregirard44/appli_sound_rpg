import React from "react";
import ButtonBeerPouring from "./ButtonBeerPouring";
import ButtonTavernTrend from "./ButtonTavernTrend";

const AmbianceAll = () => {
  return (
    <div id="containerButtonSound">
      <h2 id="titleCategory">Banger d'ambiançage medieval style</h2>
      <div id="containerButtonAmbiance">
        <ButtonTavernTrend />
        <ButtonBeerPouring />
      </div>
    </div>
  );
};

export default AmbianceAll;

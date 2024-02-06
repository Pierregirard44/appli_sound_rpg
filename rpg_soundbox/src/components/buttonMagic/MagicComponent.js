import React from "react";
import ButtonFireball from "./ButtonFireball";
import ButtonHeal from "./ButtonHeal";

const AmbianceAll = () => {
  return (
    <div id="containerButtonSound">
      <h2 id="titleCategory">Magic</h2>
      <div id="containerButtonMagic">
        <ButtonFireball />
        <ButtonHeal />
      </div>
    </div>
  );
};

export default AmbianceAll;

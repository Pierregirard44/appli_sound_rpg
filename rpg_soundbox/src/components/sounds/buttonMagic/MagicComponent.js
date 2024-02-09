import React from "react";
import ButtonFireball from "./ButtonFireball";
import ButtonHeal from "./ButtonHeal";

const MagicAll = () => {
  return (
    <div>
      <h2 id="titleCategory">Magic</h2>
      <div id="containerButton">
        <ButtonFireball />
        <ButtonHeal />
      </div>
    </div>
  );
};

export default MagicAll;

import React from "react";
import ButtonSwordSlash from "./ButtonSwordSlash";
import ButtonSwordFight from "./ButtonSwordFight";
import ButtonMaceHit from "./ButtonMaceHit";
import ButtonBow from "./ButtonBow";

const WeaponAll = () => {
  return (
    <div>
      <h2 id="titleCategory">Weapons</h2>
      <div id="containerButton">
        <ButtonSwordSlash />
        <ButtonSwordFight />
        <ButtonMaceHit />
        <ButtonBow />
      </div>
    </div>
  );
};

export default WeaponAll;

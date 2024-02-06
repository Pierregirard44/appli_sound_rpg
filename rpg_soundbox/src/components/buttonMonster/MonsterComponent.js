import React from "react";
import ButtonLaughDemoniac from "./ButtonLaughDemoniac";
import ButtonZombieGrowl from "./ButtonZombieGrowl";
import ButtonDragon from "./ButtonDragon";
import ButtonBigMonster from "./ButtonBigMonster";

const AmbianceAll = () => {
  return (
    <div id="containerButtonSound">
      <h2 id="titleCategory">Monsters</h2>
      <div id="containerButtonMonster">
        <ButtonLaughDemoniac />
        <ButtonZombieGrowl />
        <ButtonDragon />
        <ButtonBigMonster />
      </div>
    </div>
  );
};

export default AmbianceAll;

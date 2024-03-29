import React from "react";
import ButtonLaughDemoniac from "./ButtonLaughDemoniac";
import ButtonZombieGrowl from "./ButtonZombieGrowl";
import ButtonDragon from "./ButtonDragon";
import ButtonBigMonster from "./ButtonBigMonster";

const MonsterAll = () => {
  return (
    <div>
      <h2 id="titleCategory">Monsters</h2>
      <div id="containerButton">
        <ButtonLaughDemoniac />
        <ButtonZombieGrowl />
        <ButtonDragon />
        <ButtonBigMonster />
      </div>
    </div>
  );
};

export default MonsterAll;

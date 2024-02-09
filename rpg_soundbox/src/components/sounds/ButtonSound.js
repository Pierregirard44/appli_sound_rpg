import React from "react";
import AmbianceComponent from "./buttonAmbiance/AmbianceComponent";
import AnimalComponent from "./buttonAnimal/AnimalComponent";
import HumanComponent from "./buttonHuman/HumanComponent";
import MagicComponent from "./buttonMagic/MagicComponent";
import MonsterAll from "./buttonMonster/MonsterComponent";
import WeaponComponent from "./buttonWeapon/WeaponComponent";

const ButtonSound = () => {
  return (
    <>
      {" "}
      <div>

        <AmbianceComponent />
        <WeaponComponent />
        <MagicComponent />
        <AnimalComponent />
        <HumanComponent />
        <MonsterAll />

      </div>
    </>
  );
};

export default ButtonSound;

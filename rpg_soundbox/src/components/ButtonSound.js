import React from "react";
import ButtonCatMeow from "./buttonAnimal/ButtonCatMeow";
import ButtonCrowSound from "./buttonAnimal/ButtonCrowSound";
import ButtonDogBarking from "./buttonAnimal/ButtonDogBarking";
import ButtonMonkeyScream from "./buttonAnimal/ButtonMonkeyScream";
import ButtonOwlNoise from "./buttonAnimal/ButtonOwlNoise";
import ButtonTigerRoar from "./buttonAnimal/ButtonTigerRoar";
import ButtonWolfHowl from "./buttonAnimal/ButtonWolfHowl";
import ButtonLaughDemoniac from "./buttonMonster/ButtonLaughDemoniac";
import ButtonLaughFemale from "./buttonHuman/ButtonLaughFemale";
import ButtonLaughMale from "./buttonHuman/ButtonLaughMale";
import ButtonScreamFemale from "./buttonHuman/ButtonScreamFemale";
import ButtonScreamMale from "./buttonHuman/ButtonScreamMale";
import ButtonWarcryFemale from "./buttonHuman/ButtonWarcryFemale";
import ButtonWarcryMale from "./buttonHuman/ButtonWarcryMale";
import ButtonSwordFight from "./buttonWeapon/ButtonSwordFight";
import ButtonSwordSlash from "./buttonWeapon/ButtonSwordSlash";
import ButtonCricket from "./buttonAnimal/ButtonCricket";
import ButtonFireball from "./buttonMagic/ButtonFireball";
import ButtonMaceHit from "./buttonWeapon/ButtonMaceHit";
import ButtonZombieGrowl from "./buttonMonster/ButtonZombieGrowl";
import ButtonHeal from "./buttonMagic/ButtonHeal";
import ButtonDragon from "./buttonMonster/ButtonDragon";
import ButtonBigMonster from "./buttonMonster/ButtonBigMonster";
import ButtonBow from "./buttonWeapon/ButtonBow";
import ButtonTavernTrend from "./buttonAmbiance/ButtonTavernTrend";
import ButtonBeerPouring from "./buttonAmbiance/ButtonBeerPouring";

const ButtonSound = () => {
  return (
    <>
      {" "}
      <div id="containerButtonSound">
        <h2 id="titleCategory">Atmosphere</h2>
        <div id="containerButtonAmbiance">
          <ButtonTavernTrend />
          <ButtonBeerPouring />
        </div>

        <h2 id="titleCategory">Weapons</h2>
        <div id="containerButtonWeapon">
          <ButtonSwordSlash />
          <ButtonSwordFight />
          <ButtonMaceHit />
          <ButtonBow />
        </div>

        <h2 id="titleCategory">Magic</h2>
        <div id="containerButtonMagic">
          <ButtonFireball />
          <ButtonHeal />
        </div>

        <h2 id="titleCategory">Animals</h2>
        <div id="containerButtonAnimal">
          <ButtonCatMeow />
          <ButtonCrowSound />
          <ButtonDogBarking />
          <ButtonMonkeyScream />
          <ButtonOwlNoise />
          <ButtonTigerRoar />
          <ButtonWolfHowl />
          <ButtonCricket />
        </div>

        <h2 id="titleCategory">Humans</h2>
        <div id="containerButtonHuman">
          <ButtonLaughFemale />
          <ButtonLaughMale />
          <ButtonScreamFemale />
          <ButtonScreamMale />
          <ButtonWarcryFemale />
          <ButtonWarcryMale />
        </div>

        <h2 id="titleCategory">Monsters</h2>
        <div id="containerButtonMonster">
          <ButtonLaughDemoniac />
          <ButtonZombieGrowl />
          <ButtonDragon />
          <ButtonBigMonster />
        </div>
      </div>
    </>
  );
};

export default ButtonSound;

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

const ButtonSound = () => {
  return (
    <>
      {" "}
      <div id="containerButtonSound">
        <h2 id="titleCategory">Gros sons de combats sa mère</h2>
        <div id="containerButtonWeapon">
          <ButtonSwordSlash />
          <ButtonSwordFight />
          <ButtonMaceHit />
        </div>

        <h2 id="titleCategory">Fioouuu pan pan magic !!</h2>
        <div id="containerButtonMagic">
          <ButtonFireball />
        </div>

        <h2 id="titleCategory">Sons de potits animaux Grrr Grrr</h2>
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

        <h2 id="titleCategory">And scream and shout and let it out</h2>
        <div id="containerButtonHuman">
          <ButtonLaughFemale />
          <ButtonLaughMale />
          <ButtonScreamFemale />
          <ButtonScreamMale />
          <ButtonWarcryFemale />
          <ButtonWarcryMale />
        </div>

        <h2 id="titleCategory">Big Bad Monsters Oulalaaaaa</h2>
        <div id="containerButtonMonster">
          <ButtonLaughDemoniac />
          <ButtonZombieGrowl />
        </div>
      </div>
    </>
  );
};

export default ButtonSound;

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
import laughMale from "../icons/laughMale.png";
import screamFemale from "../icons/screamFemale.png";
import screamMale from "../icons/screamMale.png";
import warcryFemale from "../icons/warcryFemale.png";
import warcryMale from "../icons/warcryMale.png";
import ButtonSwordFight from "./buttonWeapon/ButtonSwordFight";
import ButtonSwordSlash from "./buttonWeapon/ButtonSwordSlash";
import ButtonCricket from "./buttonAnimal/ButtonCricket";

const ButtonSound = () => {
  return (
    <>
      {" "}
      <div id="containerButtonSound">
        <h2 id="titleCategory">Gros sons de combats sa mère</h2>
        <div id="containerButtonWeapon">
          <ButtonSwordSlash />
          <ButtonSwordFight />
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

          <button id="buttonLaughMale">
            <img src={laughMale} alt="icon" />
          </button>

          <button id="buttonScreamFemale">
            <img src={screamFemale} alt="icon" />
          </button>

          <button id="buttonScreamMale">
            <img src={screamMale} alt="icon" />
          </button>

          <button id="buttonWarcryFemale">
            <img src={warcryFemale} alt="icon" />
          </button>

          <button id="buttonWarcryMale">
            <img src={warcryMale} alt="icon" />
          </button>
        </div>

        <h2 id="titleCategory">Big Bad Monsters Oulalaaaaa</h2>
        <div id="containerButtonMonster">
          <ButtonLaughDemoniac />
        </div>
      </div>
    </>
  );
};

export default ButtonSound;

import React from "react";
import ButtonCatMeow from "./ButtonCatMeow";
import ButtonCrowSound from "./ButtonCrowSound";
import ButtonDogBarking from "./ButtonDogBarking";
import ButtonMonkeyScream from "./ButtonMonkeyScream";
import ButtonOwlNoise from "./ButtonOwlNoise";
import ButtonTigerRoar from "./ButtonTigerRoar";
import ButtonWolfHowl from "./ButtonWolfHowl";
import ButtonCricket from "./ButtonCricket";

const AmbianceAll = () => {
  return (
    <div id="containerButtonSound">
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
    </div>
  );
};

export default AmbianceAll;

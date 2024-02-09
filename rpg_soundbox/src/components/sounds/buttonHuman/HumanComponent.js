import React from "react";
import ButtonLaughFemale from "./ButtonLaughFemale";
import ButtonLaughMale from "./ButtonLaughMale";
import ButtonScreamFemale from "./ButtonScreamFemale";
import ButtonScreamMale from "./ButtonScreamMale";
import ButtonWarcryFemale from "./ButtonWarcryFemale";
import ButtonWarcryMale from "./ButtonWarcryMale";

const HumanAll = () => {
  return (
    <div>
      <h2 id="titleCategory">Humans</h2>
      <div id="containerButton">
        <ButtonLaughFemale />
        <ButtonLaughMale />
        <ButtonScreamFemale />
        <ButtonScreamMale />
        <ButtonWarcryFemale />
        <ButtonWarcryMale />
      </div>
    </div>
  );
};

export default HumanAll;

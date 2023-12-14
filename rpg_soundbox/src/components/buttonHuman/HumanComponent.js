import React from "react";
import ButtonLaughFemale from "./ButtonLaughFemale";
import ButtonLaughMale from "./ButtonLaughMale";
import ButtonScreamFemale from "./ButtonScreamFemale";
import ButtonScreamMale from "./ButtonScreamMale";
import ButtonWarcryFemale from "./ButtonWarcryFemale";
import ButtonWarcryMale from "./ButtonWarcryMale";


const AmbianceAll = () => {
    return (
        <div id="containerButtonHuman">
            <h2 id="titleCategory">And scream and shout and let it out</h2>
                <div id="containerButtonHuman">
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

export default AmbianceAll;



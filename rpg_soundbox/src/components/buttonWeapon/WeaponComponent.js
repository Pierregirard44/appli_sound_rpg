import React from "react";
import ButtonSwordSlash from "./ButtonSwordSlash";
import ButtonSwordFight from "./ButtonSwordFight";
import ButtonMaceHit from "./ButtonMaceHit";
import ButtonBow from "./ButtonBow";

const AmbianceAll = () => {
    return (
        <div id="containerButtonHuman">
            <h2 id="titleCategory">Gros sons de combats sa mère</h2>
                <div id="containerButtonWeapon">
                <ButtonSwordSlash />
                <ButtonSwordFight />
                <ButtonMaceHit />
                <ButtonBow />
                </div>
        </div>
    );
};

export default AmbianceAll;



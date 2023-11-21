import catMeow from "../icons/catMeow.png";
import crowSound from "../icons/crowSound.png";
import dogBarking from "../icons/dogBarking.png";
import monkeyScream from "../icons/monkeyScream.png";
import owlNoise from "../icons/owlNoise.png";
import tigerRoar from "../icons/tigerRoar.png";
import wolfHowl from "../icons/wolfHowl.png";
import laughDemoniac from "../icons/laughDemoniac.png";
import laughFemale from "../icons/laughingFemale.png";
import laughMale from "../icons/laughMale.png";
import screamFemale from "../icons/screamFemale.png";
import screamMale from "../icons/screamMale.png";
import warcryFemale from "../icons/warcryFemale.png";
import warcryMale from "../icons/warcryMale.png";
import swordSlash from "../icons/swordSlash.png";
import swordFight from "../icons/swordFight.png";

const ButtonSound = () => {
  return (
    <>
      {" "}
      <div id="containerButton">
        <audio id="swordSlash" class="swordSlash">
          <source src="./sounds/swordSlash.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonSwordSlash" class="buttonSwordSlash" alt="icon">
          <img src={swordSlash} alt="icon" />
        </button>

        <audio id="swordFight">
          <source src="./sounds/swordFight.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonSwordFight">
          <img src={swordFight} alt="icon" />
        </button>

        <audio id="catMeow">
          <source src="./sounds/catMeow.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonCatMeow">
          <img src={catMeow} alt="icon" />
        </button>

        <audio id="crowSound">
          <source src="./sounds/crowSound.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonCrowSound">
          <img src={crowSound} alt="icon" />
        </button>

        <audio id="dogBarking">
          <source src="./sounds/dogBarking.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonDogBarking">
          <img src={dogBarking} alt="icon" />
        </button>

        <audio id="monkeyScream">
          <source src="./sounds/monkeyScream.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonMonkeyScream">
          <img src={monkeyScream} alt="icon" />
        </button>

        <audio id="owlNoise">
          <source src="./sounds/owlNoise.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonOwlNoise">
          <img src={owlNoise} alt="icon" />
        </button>

        <audio id="tigerRoar">
          <source src="./sounds/tigerRoar.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonTigerRoar">
          <img src={tigerRoar} alt="icon" />
        </button>

        <audio id="wolfHowl">
          <source src="./sounds/wolfHowl.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonWolfHowl">
          <img src={wolfHowl} alt="icon" />
        </button>

        <audio id="laughDemoniac">
          <source src="./sounds/laughDemoniac.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonLaughDemoniac">
          <img src={laughDemoniac} alt="icon" />
        </button>

        <audio id="laughFemale">
          <source src="./sounds/laughFemale.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonLaughFemale">
          <img src={laughFemale} alt="icon" />
        </button>

        <audio id="laughMale">
          <source src="./sounds/laughMale.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonLaughMale">
          <img src={laughMale} alt="icon" />
        </button>

        <audio id="screamFemale">
          <source src="./sounds/screamFemale.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonScreamFemale">
          <img src={screamFemale} alt="icon" />
        </button>

        <audio id="screamMale">
          <source src="./sounds/screamMale.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonScreamMale">
          <img src={screamMale} alt="icon" />
        </button>

        <audio id="warcryFemale">
          <source src="./sounds/warcryFemale.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonWarcryFemale">
          <img src={warcryFemale} alt="icon" />
        </button>

        <audio id="warcryMale">
          <source src="./sounds/warcryMale.mp3" type="audio/mp3"></source>
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        <button id="buttonWarcryMale">
          <img src={warcryMale} alt="icon" />
        </button>
      </div>
    </>
  );
};

export default ButtonSound;

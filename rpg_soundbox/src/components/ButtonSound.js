import React, { useState, useRef, useEffect } from 'react';
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
import swordSlashSound from "../sounds/swordSlash.mp3";

const ButtonSound = () => {
  
  const [audioPlayer, setAudioPlayer] = useState(null);

  const audioRef = useRef(null);

  const loadAudio = (audioFile) => {
    const audio = new Audio();
    setAudioPlayer(audio);
    audioRef.current = audio;
    return new Promise((resolve, reject) => {
      audio.addEventListener('canplaythrough', resolve);
      audio.addEventListener('error', (error) => {
        console.error('Erreur lors du chargement du fichier audio :', error);
        reject(error);
      });
      audio.src = audioFile;
    })
    .then(() => {
      // Le fichier audio est prêt, vous pouvez le lire ici si nécessaire.
    })
    .catch((error) => {
      console.error('Erreur lors du chargement du fichier audio :', error);
    });
  };

  useEffect(() => {
    return () => {
      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      }
    };
  }, [audioPlayer]);

  return (
    <>
      {" "}
      <div id="containerButton">
        <button id="buttonSwordSlash" className="buttonSwordSlash" alt="icon" onClick={() => loadAudio({swordSlashSound})}>
          <img src={swordSlash} alt="icon" />
        </button>

        <button id="buttonSwordFight">
          <img src={swordFight} alt="icon" />
        </button>

        <button id="buttonCatMeow">
          <img src={catMeow} alt="icon" />
        </button>

        <button id="buttonCrowSound">
          <img src={crowSound} alt="icon" />
        </button>

        <button id="buttonDogBarking">
          <img src={dogBarking} alt="icon" />
        </button>

        <button id="buttonMonkeyScream">
          <img src={monkeyScream} alt="icon" />
        </button>

        <button id="buttonOwlNoise">
          <img src={owlNoise} alt="icon" />
        </button>

        <button id="buttonTigerRoar">
          <img src={tigerRoar} alt="icon" />
        </button>

        <button id="buttonWolfHowl">
          <img src={wolfHowl} alt="icon" />
        </button>

        <button id="buttonLaughDemoniac">
          <img src={laughDemoniac} alt="icon" />
        </button>

        <button id="buttonLaughFemale">
          <img src={laughFemale} alt="icon" />
        </button>

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
    </>
  );
};

export default ButtonSound;

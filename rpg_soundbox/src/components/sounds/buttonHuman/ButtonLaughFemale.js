import React, { useRef } from 'react';
import laughFemale from "../../../icons/laughingFemale.png";
import laughFemaleSound from "../../../sounds/laughFemale.mp3";

const LaughFemaleButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={laughFemale} alt="Laughing female sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={laughFemaleSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default LaughFemaleButton;
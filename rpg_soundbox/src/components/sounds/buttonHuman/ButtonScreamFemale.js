import React, { useRef } from 'react';
import screamFemale from "../../../icons/screamFemale.png";
import screamFemaleSound from "../../../sounds/screamFemale.mp3";

const ScreamFemaleButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={screamFemale} alt="Female scream sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={screamFemaleSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default ScreamFemaleButton;
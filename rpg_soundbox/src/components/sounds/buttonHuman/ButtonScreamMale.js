import React, { useRef } from 'react';
import screamMale from "../../../icons/screamMale.png";
import screamMaleSound from "../../../sounds/screamMale.mp3";

const ScreamMaleButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={screamMale} alt="Male scream sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={screamMaleSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default ScreamMaleButton;
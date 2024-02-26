import React, { useRef } from 'react';
import catMeow from "../../../icons/catMeow.png";
import catMeowSound from "../../../sounds/catMeow.mp3";

const CatMeowButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={catMeow} alt="Cat meow icon" />
      </button>
      <audio ref={audioRef}>
        <source src={catMeowSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default CatMeowButton;
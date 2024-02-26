import React, { useRef } from 'react';
import fireball from "../../../icons/fireball.png";
import fireballSound from "../../../sounds/fireball.mp3";

const FireballButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={fireball} alt="Fireball sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={fireballSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default FireballButton;
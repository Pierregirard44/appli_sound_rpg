import React, { useRef } from 'react';
import zombieGrowl from "../../../icons/zombieGrowl.png";
import zombieGrowlSound from "../../../sounds/zombieGrowl.mp3";

const ZombieGrowlButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={zombieGrowl} alt="Zombie growl sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={zombieGrowlSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default ZombieGrowlButton;
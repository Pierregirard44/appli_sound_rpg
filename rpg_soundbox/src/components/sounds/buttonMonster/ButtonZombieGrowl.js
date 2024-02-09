import React, { useRef } from 'react';
import zombieGrowl from "../../../icons/zombieGrowl.png";
import zombieGrowlSound from "../../../sounds/zombieGrowl.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Grrglglgglg !");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={zombieGrowl} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={zombieGrowlSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
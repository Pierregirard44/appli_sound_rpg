import React, { useRef } from 'react';
import dragon from "../../../icons/dragon.png";
import dragonSound from "../../../sounds/dragon.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Roooooaaar rrrrrrrrr...");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={dragon} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={dragonSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
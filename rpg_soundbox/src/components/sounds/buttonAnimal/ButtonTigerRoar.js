import React, { useRef } from 'react';
import tigerRoar from "../../../icons/tigerRoar.png";
import tigerRoarSound from "../../../sounds/tigerRoar.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Grrrrrrrrr !");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={tigerRoar} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={tigerRoarSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
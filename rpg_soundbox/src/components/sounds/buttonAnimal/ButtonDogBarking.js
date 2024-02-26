import React, { useRef } from 'react';
import dogBarking from "../../../icons/dogBarking.png";
import dogBarkingSound from "../../../sounds/dogBarking.mp3";

const DogBarkingButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={dogBarking} alt="Dog barking sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={dogBarkingSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default DogBarkingButton;
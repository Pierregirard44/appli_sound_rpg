import React, { useRef } from 'react';
import screamFemale from "../../icons/screamFemale.png";
import screamFemaleSound from "../../sounds/screamFemale.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Haaaaaaaaaaaaaaaaaaaaaaaaaaaa!");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={screamFemale} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={screamFemaleSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
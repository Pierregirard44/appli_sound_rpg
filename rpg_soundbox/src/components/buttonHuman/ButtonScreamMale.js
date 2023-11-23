import React, { useRef } from 'react';
import screamMale from "../../icons/screamMale.png";
import screamMaleSound from "../../sounds/screamMale.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Haaaaaaaaaaaaaaaaaaaaaaaaaaaa!");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={screamMale} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={screamMaleSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
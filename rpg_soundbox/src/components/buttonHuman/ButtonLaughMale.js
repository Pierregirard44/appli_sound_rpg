import React, { useRef } from 'react';
import laughMale from "../../icons/laughMale.png";
import laughMaleSound from "../../sounds/laughMale.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Hahahahaha");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={laughMale} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={laughMaleSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
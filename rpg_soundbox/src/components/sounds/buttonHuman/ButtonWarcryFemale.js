import React, { useRef } from 'react';
import warcryFemale from "../../../icons/warcryFemale.png";
import warcryFemaleSound from "../../../sounds/warcryFemale.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Waaaaaaaaaarg !");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={warcryFemale} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={warcryFemaleSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
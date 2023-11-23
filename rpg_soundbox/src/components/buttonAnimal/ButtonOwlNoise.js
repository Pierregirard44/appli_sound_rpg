import React, { useRef } from 'react';
import owlNoise from "../../icons/owlNoise.png";
import owlNoiseSound from "../../sounds/owlNoise.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("OUuuuuuuuuhh Ooouuuuuuhhhhh");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={owlNoise} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={owlNoiseSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
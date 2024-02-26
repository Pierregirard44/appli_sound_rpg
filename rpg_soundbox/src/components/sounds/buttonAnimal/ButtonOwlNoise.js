import React, { useRef } from 'react';
import owlNoise from "../../../icons/owlNoise.png";
import owlNoiseSound from "../../../sounds/owlNoise.mp3";

const OwlNoiseButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={owlNoise} alt="Owl noise sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={owlNoiseSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default OwlNoiseButton;
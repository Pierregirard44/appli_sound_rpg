import React, { useRef } from 'react';
import wolfHowl from "../../../icons/wolfHowl.png";
import wolfHowlSound from "../../../sounds/wolfHowl.mp3";

const WolfHowlButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={wolfHowl} alt="Wolf howl sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={wolfHowlSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default WolfHowlButton;
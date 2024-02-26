import React, { useRef } from 'react';
import crowSound from "../../../icons/crowSound.png";
import crowSoundSound from "../../../sounds/crowSound.mp3";

const CrowSoundButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={crowSound} alt="Crow sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={crowSoundSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default CrowSoundButton;
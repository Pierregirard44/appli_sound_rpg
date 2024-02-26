import React, { useRef } from 'react';
import laughDemoniac from "../../../icons/laughDemoniac.png";
import laughDemoniacSound from "../../../sounds/laughDemoniac.mp3";

const LaughDemoniacButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={laughDemoniac} alt="Laugh demoniac sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={laughDemoniacSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default LaughDemoniacButton;
import React, { useRef } from 'react';
import warcryMale from "../../../icons/warcryMale.png";
import warcryMaleSound from "../../../sounds/warcryMale.mp3";

const WarcryMaleButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={warcryMale} alt="Male warcry sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={warcryMaleSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default WarcryMaleButton;
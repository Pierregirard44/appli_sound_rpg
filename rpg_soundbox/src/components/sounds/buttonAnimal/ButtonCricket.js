import React, { useRef } from 'react';
import cricket from "../../../icons/cricket.png";
import cricketSound from "../../../sounds/cricket.mp3";

const CricketSoundButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={cricket} alt="Cricket sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={cricketSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default CricketSoundButton;
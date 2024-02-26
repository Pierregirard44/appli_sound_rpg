import React, { useRef } from 'react';
import bigMonster from "../../../icons/bigMonster.png";
import bigMonsterSound from "../../../sounds/bigMonster.mp3";

const BigMonsterButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={bigMonster} alt="Big monster sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={bigMonsterSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BigMonsterButton;
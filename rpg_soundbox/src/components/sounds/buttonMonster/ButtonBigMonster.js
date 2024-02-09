import React, { useRef } from 'react';
import bigMonster from "../../../icons/bigMonster.png";
import bigMonsterSound from "../../../sounds/bigMonster.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Screugneugneu !");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={bigMonster} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={bigMonsterSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
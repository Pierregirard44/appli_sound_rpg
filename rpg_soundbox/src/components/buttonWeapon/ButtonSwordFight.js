import React, { useRef } from 'react';
import swordFight from "../../icons/swordFight.png";
import swordFightSound from "../../sounds/swordFight.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Bim Bam Boum");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={swordFight} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={swordFightSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
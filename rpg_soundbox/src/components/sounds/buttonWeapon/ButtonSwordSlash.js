import React, { useRef } from 'react';
import swordSlash from "../../../icons/swordSlash.png";
import swordSlashSound from "../../../sounds/swordSlash.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Tsiiiing");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={swordSlash} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={swordSlashSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
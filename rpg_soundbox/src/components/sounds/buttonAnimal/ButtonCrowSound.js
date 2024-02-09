import React, { useRef } from 'react';
import crowSound from "../../../icons/crowSound.png";
import crowSoundSound from "../../../sounds/crowSound.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Croa Croa Croa");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={crowSound} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={crowSoundSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
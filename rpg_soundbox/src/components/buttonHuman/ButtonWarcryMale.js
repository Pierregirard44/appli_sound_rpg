import React, { useRef } from 'react';
import warcryMale from "../../icons/warcryMale.png";
import warcryMaleSound from "../../sounds/warcryMale.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Waaaaaaaaaarg !");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={warcryMale} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={warcryMaleSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
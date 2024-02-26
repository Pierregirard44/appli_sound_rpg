import React, { useRef } from 'react';
import catMeow from "../../../icons/catMeow.png";
import catMeowSound from "../../../sounds/catMeow.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Miaou");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img id="iconSound" src={catMeow} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={catMeowSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
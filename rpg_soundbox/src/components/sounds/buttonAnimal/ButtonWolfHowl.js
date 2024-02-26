import React, { useRef } from 'react';
import wolfHowl from "../../../icons/wolfHowl.png";
import wolfHowlSound from "../../../sounds/wolfHowl.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("AAAOuuuuuuuuuuuuuuuuu !");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img id="iconSound" src={wolfHowl} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={wolfHowlSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
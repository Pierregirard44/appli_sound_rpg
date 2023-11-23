import React, { useRef } from "react";
import fireball from "../../icons/fireball.png";
import fireballSound from "../../sounds/fireball.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
    console.log("criii criii");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={fireball} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={fireballSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;

import React, { useRef } from "react";
import heal from "../../../icons/heal.png";
import healSound from "../../../sounds/soin.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
    console.log("#pansement");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={heal} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={healSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;

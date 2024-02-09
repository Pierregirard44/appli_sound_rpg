import React, { useRef } from "react";
import Mace from "../../../icons/mace.png";
import MaceHit from "../../../sounds/maceHit.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
    console.log("Klong !");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={Mace} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={MaceHit} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;

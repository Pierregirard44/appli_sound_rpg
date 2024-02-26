import React, { useRef } from 'react';
import tigerRoar from "../../../icons/tigerRoar.png";
import tigerRoarSound from "../../../sounds/tigerRoar.mp3";

const TigerRoarButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={tigerRoar} alt="Tiger roar sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={tigerRoarSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TigerRoarButton;
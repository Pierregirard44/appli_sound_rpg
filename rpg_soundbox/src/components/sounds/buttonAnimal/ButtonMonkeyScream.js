import React, { useRef } from 'react';
import monkeyScream from "../../../icons/monkeyScream.png";
import monkeyScreamSound from "../../../sounds/monkeyScream.mp3";

const MonkeyScreamButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={monkeyScream} alt="Monkey scream sound icon" />
      </button>
      <audio ref={audioRef}>
        <source src={monkeyScreamSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MonkeyScreamButton;
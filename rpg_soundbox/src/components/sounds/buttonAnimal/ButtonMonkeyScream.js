import React, { useRef } from 'react';
import monkeyScream from "../../../icons/monkeyScream.png";
import monkeyScreamSound from "../../../sounds/monkeyScream.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Ah ah ah ouuuuh!");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img id="iconSound" src={monkeyScream} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={monkeyScreamSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
import React, { useRef } from 'react';
import dogBarking from "../../../icons/dogBarking.png";
import dogBarkingSound from "../../../sounds/dogBarking.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Ouaf Ouaf Ouaf Ouaf Ouaf");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img id="iconSound" src={dogBarking} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={dogBarkingSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
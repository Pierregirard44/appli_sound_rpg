import React, { useRef } from 'react';
import tavernTrend from "../../icons/tavernTrend.png";
import tavernTrendSound from "../../sounds/tavernTrend.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Miaou");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={tavernTrend} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={tavernTrendSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
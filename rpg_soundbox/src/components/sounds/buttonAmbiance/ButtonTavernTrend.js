import React, { useRef } from 'react';
import tavernTrend from "../../../icons/tavernTrend.png";
import tavernTrendSound from "../../../sounds/tavernTrend.mp3";

const TavernTrendButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={tavernTrend} alt="Tavern trend icon" />
      </button>
      <audio ref={audioRef}>
        <source src={tavernTrendSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TavernTrendButton;
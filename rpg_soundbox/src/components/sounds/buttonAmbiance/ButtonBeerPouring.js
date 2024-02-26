import React, { useRef } from 'react';
import beerPouring from "../../../icons/beerPouring.png";
import beerPouringSound from "../../../sounds/beerPouring.mp3";

const BeerPouringButton = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={beerPouring} alt="Beer pouring icon" />
      </button>
      <audio ref={audioRef}>
        <source src={beerPouringSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BeerPouringButton;
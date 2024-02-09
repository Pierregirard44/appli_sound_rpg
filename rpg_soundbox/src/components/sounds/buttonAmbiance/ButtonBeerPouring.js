import React, { useRef } from 'react';
import beerPouring from "../../../icons/beerPouring.png";
import beerPouringSound from "../../../sounds/beerPouring.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Glouougougogugoulououou");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={beerPouring} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={beerPouringSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
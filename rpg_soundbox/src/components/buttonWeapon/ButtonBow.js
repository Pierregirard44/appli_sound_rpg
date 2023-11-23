import React, { useRef } from 'react';
import bow from "../../icons/bow.png";
import bowSound from "../../sounds/bow.mp3";

const MyComponent = () => {
  const audioRef = useRef(null);

  const playSound = () => {
        audioRef.current.play();
        console.log("Doooing toc !");
  };

  return (
    <div>
      <button onClick={playSound}>
        <img src={bow} alt="icon" />
      </button>
      <audio ref={audioRef}>
        <source src={bowSound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MyComponent;
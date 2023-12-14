import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import ButtonSound from "./components/ButtonSound";
import AmbianceComponent from "./components/buttonAmbiance/AmbianceComponent";
import ArmesComponent from "./components/buttonWeapon/WeaponComponent";
import MagicComponent from "./components/buttonMagic/MagicComponent";
import AnimauxComponent from "./components/buttonAnimal/AnimalComponent";
import HumainsComponent from "./components/buttonHuman/HumanComponent";
import MonstresComponent from "./components/buttonMonster/MonsterComponent";

function App() {
  return (
    <div className="h-[100%]">
      <Router>
        <Navbar />
        <h1 className="text-gray-50 text-4xl text-center pt-5">RPG SoundBox</h1>
        <Routes>
          <Route path="/ambiance" element={<AmbianceComponent />} />
          <Route path="/armes" element={<ArmesComponent />} />
          <Route path="/magie" element={<MagicComponent />} />
          <Route path="/animaux" element={<AnimauxComponent />} />
          <Route path="/humains" element={<HumainsComponent />} />
          <Route path="/monstres" element={<MonstresComponent />} />
          <Route path="/all" element={<ButtonSound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

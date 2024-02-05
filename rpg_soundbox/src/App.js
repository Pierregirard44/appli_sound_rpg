import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />{" "}
          <Route path="/atmosphere" element={<AmbianceComponent />} />
          <Route path="/weapons" element={<ArmesComponent />} />
          <Route path="/magic" element={<MagicComponent />} />
          <Route path="/animals" element={<AnimauxComponent />} />
          <Route path="/humans" element={<HumainsComponent />} />
          <Route path="/monsters" element={<MonstresComponent />} />
          <Route path="/homesoundbox" element={<ButtonSound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

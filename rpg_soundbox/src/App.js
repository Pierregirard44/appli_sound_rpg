import React from "react";
import {BrowserRouter as Router,Route,Routes,Navigate,} from "react-router-dom";
import Navbar from "./components/Navbar";
import ButtonSound from "./components/sounds/ButtonSound";
import AmbianceComponent from "./components/sounds/buttonAmbiance/AmbianceComponent";
import ArmesComponent from "./components/sounds/buttonWeapon/WeaponComponent";
import MagicComponent from "./components/sounds/buttonMagic/MagicComponent";
import AnimauxComponent from "./components/sounds/buttonAnimal/AnimalComponent";
import HumainsComponent from "./components/sounds/buttonHuman/HumanComponent";
import MonstresComponent from "./components/sounds/buttonMonster/MonsterComponent";
import WIP from "./components/WIP";
import Home from "./components/Home";
import PageTest from "./components/PageTest";
import "./fonts/GoudyBookletter1911.otf";
import NavbarII from "./components/NavbarII";
import "./App.css";

function App() {
  return (
    <div className="h-[100%]">
      <Router>
        <Navbar />
        <NavbarII />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />{" "}
          <Route path="/home" element={<Home />} />
          <Route path="/atmosphere" element={<AmbianceComponent />} />
          <Route path="/weapons" element={<ArmesComponent />} />
          <Route path="/magic" element={<MagicComponent />} />
          <Route path="/animals" element={<AnimauxComponent />} />
          <Route path="/humans" element={<HumainsComponent />} />
          <Route path="/monsters" element={<MonstresComponent />} />
          <Route path="/homesoundbox" element={<ButtonSound />} />
          <Route path="/newcharacter" element={<WIP />} />
          <Route path="/characterlist" />
          {/* Penser au user_id pour la route character list */}
          <Route path="/spells" element={<WIP />} />
          <Route path="/items" element={<WIP />} />
          <Route path="/monsters" element={<WIP />} />
          <Route path="/weapons" element={<WIP />} />
          <Route path="/armors" element={<WIP />} />
          <Route path="/WIP" element={<WIP />} />
          <Route path="/pagetest" element={<PageTest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

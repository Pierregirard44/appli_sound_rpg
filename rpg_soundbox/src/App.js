import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ButtonSound from "./components/ButtonSound";
import Navbar from "./components/Navbar";

// Importe tes composants spécifiques pour chaque catégorie ici
import AmbianceComponent from "./components/AmbianceComponent";
import ArmesComponent from "./components/ArmesComponent";
import MagieComponent from "./components/MagieComponent";
import AnimauxComponent from "./components/AnimauxComponent";
import HumainsComponent from "./components/HumainsComponent";
import MonstresComponent from "./components/MonstresComponent";

// Importe d'autres composants pour les catégories suivantes...

function App() {
  return (
    <div className="h-[100%]">
      <Router>
        <Navbar />
        <h1 className="text-gray-50 text-4xl text-center pt-5">RPG SoundBox</h1>
        <Switch>
          <Route path="/ambiance" component={AmbianceComponent} />
          <Route path="/armes" component={ArmesComponent} />
          <Route path="/armes" component={MagieComponent} />
          <Route path="/animaux" component={AnimauxComponent} />
          <Route path="/humains" component={HumainsComponent} />
          <Route path="/monstres" component={MonstresComponent} />
        </Switch>
        <ButtonSound />
      </Router>
    </div>
  );
}

export default App;

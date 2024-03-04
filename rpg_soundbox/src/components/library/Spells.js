import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Spells = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.dnd5eapi.co/api/spells/`)
      .then((response) => {
        setSpells(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []); // Ajout de la dépendance vide pour éviter les appels en boucle

  // Définissez le nombre de colonnes par ligne (4 ou 5, selon votre choix)
  const columnsPerRow = 4;

  return (
    <div className="container-fluid">
      <div className="row">
        {spells.map((spell, index) => (
          <div key={index} className={`col-md-${12 / columnsPerRow}`}>
            <div className="card" style={{ width: "100%", margin: "0.5rem" }}>
              <div className="card-body">
                <Link to={`/DetailPage/${spell.name}`}>
                  <h5 className="card-title">{spell.name}</h5>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spells;

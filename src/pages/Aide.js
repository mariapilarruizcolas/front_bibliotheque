import React from "react";

import NavigationBarre from "../components/NavigationBarre";

import "../styles/test.css";

function Aide() {
  return (
    <div className="component2">
      <NavigationBarre />
      <div className="container2">
        <h2>Contactez nous</h2>
        <form className="form-data2">
          <input
            type="text"
            className="form-control2"
            placeholder="Entrez votre identifiant"
            id="userId"
          />
          <input
            type="text"
            className="form-control2"
            placeholder="Ecrivez votre message"
            id="message"
          />

          <button type="submit">Envoyer</button>
        </form>
        <div className="confirmation2">
          <p>Message envoyé</p>
        </div>
      </div>
    </div>
  );
}

export default Aide;

import React, { useState, useContext } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import NavBarSide from "../components/NavBarSide";
import UserContext from "../contexts/UserContext";
import Nav from "../components/Nav";
import "../styles/test.css";
//TO
//QUAND ON ENLEVE LES DONNES DE L'INPUT
//IL FAUT QUE LE MESSAGE OU DATA DISPARAISSENT
function GetUserById() {
  const { firstname } = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  function handleUserIdChange(e) {
    setUserId(Number(e.target.value));
    if (e.target.value === "") {
      setMessage("");
      setData("");
    }
  }

  const submitGetUserById = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8000/api/users/${userId}`)
      .then((res) => setData(res.data))
      .catch((err) => setMessage("L'utilisateur n'existe pas"));

    console.log("Data user", data);
  };

  return (
    <div className="component2">
      <NavBar />
      <div className="userpage2">
        <div className="navBarSide2">
          <NavBarSide />
          <Nav />
        </div>
        <div className="container2">
          <h2>Bonjour {firstname}</h2>
          <div className="content2">
            <form className="form-data2" onSubmit={submitGetUserById}>
              <h2>Consulter les données d'un utilisateur</h2>
              <input
                type="text"
                className="form-control2"
                placeholder="Entrez le numero d'identification de l'utilisateur"
                id="userId"
                onChange={handleUserIdChange}
              />
              <button type="submit">Chercher</button>
            </form>

            {data ? (
              <div className="confirmation2">
                <h2>Données de l'utilisateur numéro: {data.userId} </h2>
                <p>Prénom: {data.firstname}</p>
                <p>Adresse email: {data.email}</p>
                <p>Droits d'administrateur: {data.admin}</p>
              </div>
            ) : null}
            {message ? (
              <div className="confirmation2">
                <p>{message}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetUserById;

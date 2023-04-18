import React, { useState } from "react";

import axios from "axios";
import NavBar from "../components/NavBar";
import Nav from "../components/Nav";
import NavBarSide from "../components/NavBarSide";
//import AuthContext from "../contexts/AuthContext";
import "../styles/test.css";
//to do
//le message de bienvenue change de firstname quand tu rempli le formulaire
//on a pas recupere le firstname du context

function Register(credentials) {
  const [showResults, setShowResults] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState([]);

  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  //const [successful, setSuccessful] = useState('');

  function handleFirstNameChange(e) {
    if (e.target.value.firstname === "") {
      setMessage("");
    }
  }
  const submitPostUser = (e) => {
    setShowResults(!showResults);
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/users", {
        firstname,
        lastname,
        email,
        admin,
        password,
      })
      .then((res) => setMessage(res.data))

      .catch((err) => console.log(err));
    return message;
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
          <h2>Bonjour </h2>

          <div className="content2">
            <form className="form-data2" onSubmit={submitPostUser}>
              <h2>Créer un nouveau utilisateur</h2>
              <input
                type="text"
                className="form-control2"
                placeholder="Prénom"
                // id="firstname" onChange={(e) => setFirstname(e.target.value)} />
                id="firstname"
                onChange={handleFirstNameChange}
              />
              <input
                type="text"
                className="form-control2"
                placeholder="Nom"
                id="lastname"
                onChange={(e) => setLastname(e.target.value)}
              />

              <input
                type="text"
                className="form-control2"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="form-control2"
                placeholder="Vous êtes administrateur?"
                id="admin"
                onChange={(e) => setAdmin(e.target.value)}
              />
              <input
                type="text"
                className="form-control2"
                placeholder="Mot de passe"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Envoyer</button>
            </form>
          </div>
          {showResults ? (
            <div className="confirmation2">
              <h2> {message}</h2>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Register;

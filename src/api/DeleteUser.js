import React, { useState, useContext } from "react";

import axios from "axios";
import UserContext from "../contexts/UserContext";
import NavBar from "../components/NavBar";
import Nav from "../components/Nav";
import NavBarSide from "../components/NavBarSide";
import "../styles/test.css";

//TO DO LISTE
//VERIFIER SI L'USERID EXISTE ET S'IL A PAS D'EMPRUNTS

//DEMANDER CONFIRMATION AVANT DE SUPRIMER
//lE MESSAGE DOIT S'AFFICHER SEULEMENT SI SUCCES
function DeleteUser() {
  const { firstname } = useContext(UserContext);
  // const [data, setData] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  //const [successful, setSuccessful] = useState('');
  function handleUserIdChange(e) {
    setUserId(Number(e.target.value));
    if (e.target.value === "") {
      setMessage("");
    }
  }
  async function submitDeleteUser(e) {
    e.preventDefault();
    console.log("typeOf", typeof userId);

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/users/${userId}`
      );
      console.log("Reponse", response);
      if (response.status === 404) {
        setMessage("Utilisateur non trouvé");
        console.log("message", message);
      } else if (response.status === 200) {
        setMessage("🎉 Utilisateur supprimé avec succès!");
      } else if (response.status === 403) {
        setMessage(
          "L'utilisateur a des emprunts en cours et il ne peut pas être supprimé"
        );
      } else if (response.status === 500) {
        setMessage("Une erreur est survenue");
      }
    } catch (error) {
      console.error("agargur ", error);
      setMessage(error.response.data);
      return error.response.data;
      // console.log("Erreur", err);

      // setMessage("Une erreur est survenue");
    }
  }

  //   async function submitDeleteUser(e) {
  //     e.preventDefault();

  //     try {
  //       const reponse = await axios.delete(
  //         `http://localhost:8000/api/users/${userId}`
  //       );
  //       //   if (reponse.status === 404) {
  //       //     setMessage("Utilisateur non trouvé");
  //       //   } else if (reponse.status === 200) {
  //       //     setMessage("🎉 Utilisateur suprimé avec succès!");
  //       //   } else if (reponse.status === 403) {
  //       //     setMessage(
  //       //       "L'utilisateur a des emprunts en cours et il ne peut pas être supprimé"
  //       //     );
  //       //   } else if (reponse.status === 500) {
  //       //     setMessage("Une erreur est survenue");
  //       //   } else {
  //       //     setMessage("Une erreur est survenue");
  //       //   }
  //       return message;
  //     } catch (err) {
  //       if (err.status === 404) {
  //         setMessage("Utilisateur non trouvé");
  //       } else if (err.status === 200) {
  //         setMessage("🎉 Utilisateur suprimé avec succès!");
  //       } else if (err.status === 403) {
  //         setMessage(
  //           "L'utilisateur a des emprunts en cours et il ne peut pas être supprimé"
  //         );
  //       } else if (err.status === 500) {
  //         setMessage("Une erreur est survenue");
  //       }
  //       console.log(err);
  //     }
  //   }

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
          {/* // {console.log("data", data)} */}
          <div className="content2">
            <form className="form-data2" onSubmit={submitDeleteUser}>
              <h2>Supprimer un utilisateur</h2>
              <input
                type="text"
                className="form-control2"
                placeholder="Entrez le numero de l'utilisateur"
                id="userId"
                onChange={handleUserIdChange}
              />

              <button type="submit">Suprimer utilisateur</button>
            </form>

            {message ? (
              <div className="confirmation2">
                {/* <h2>🎉 Utilisateur supprimé! </h2> */}
                <h2>{message}</h2>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;

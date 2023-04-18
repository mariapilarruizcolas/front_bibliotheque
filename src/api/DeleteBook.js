import React, { useState, useContext } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Nav from "../components/Nav";
import NavBarSide from "../components/NavBarSide";

import UserContext from "../contexts/UserContext";
import "../styles/test.css";

//TO DO LISTE
//DEMANDER CONFIRMATION AVANT DE SUPPRIMER
//lE MESSAGE DOIT S'AFFICHER UNIQUEMENT SI SUCCES
function DeleteBook() {
  const { firstname } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [bookId, setBookId] = useState("");
  //const [successful, setSuccessful] = useState('');
  function handleBookIdChange(e) {
    setBookId(Number(e.target.value));
    if (e.target.value === "") {
      setMessage("");
    }
  }
  async function submitDeleteBook(e) {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/books/${bookId}`
      );
      console.log("Responses", response);
      if (response.status === 200) {
        setMessage("🎉 Livre supprimé avec succès!");
      } else {
        setMessage(response.data.error || "Une erreur est survenue");
      }
    } catch (error) {
      console.error(error);
      setMessage("Une erreur est survenue");
    }
  }

  //   async function submitDeleteBook(e) {
  //     // data = "";
  //     e.preventDefault();
  //     try {
  //       await axios
  //         .delete(`http://localhost:8000/api/books/${bookId}`)

  //         .then((res) => setMessage(res.message));
  //       if (message.status === 404) {
  //         setMessage(message.data.error);
  //       } else if (message.status === 200) {
  //         setMessage("🎉 Utilisateur supprimé avec succès!");
  //       } else if (message.status === 403) {
  //         setMessage(message.data.error);
  //       } else if (message.status === 500) {
  //         setMessage("Une erreur est survenue");
  //       }
  //       //.then((res) => console.log(res));
  //     } catch (error) {
  //       console.error("agargur ", error);
  //       setMessage(error.message.data);
  //       return error.message.data;
  //     }

  //     console.log("type de donnees recues: ", typeof message);
  //     console.log("Message", message);
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
          <div className="content2">
            <form className="form-data2" onSubmit={submitDeleteBook}>
              <h2>Supprimer un livre</h2>
              <input
                type="text"
                className="form-control2"
                placeholder="Entrez le code de barres du livre"
                id="bookId"
                onChange={handleBookIdChange}
              />

              <button type="submit">Suprimer livre</button>
            </form>
            {message ? (
              <div className="confirmation2">
                <h2>{message}</h2>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;

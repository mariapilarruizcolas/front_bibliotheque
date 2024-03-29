import React, { useState, useContext } from "react";
import axios from "axios";
import NavigationBarre from "../components/NavigationBarre";
import Menu from "../components/Menu";
import NavBarSide from "../components/NavBarSide";
import UserContext from "../contexts/UserContext";
import "../styles/test.css";
//TO DO
//QUAND ON ENLEVE LES DONNES DE L'INPUT
//IL FAUT QUE LE MESSAGE OU DATA DISPARAISSENT
function CreateBook() {
  const { firstname } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [successful, setSuccessful] = useState("");
  const [message, setMessage] = useState("");

  const isFree = true;
  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  const handleReset = (e) => {
    setAuthor("");
    setTitle("");
    setMessage("");
    setSuccessful("");
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
  };

  const submitPostBook = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/books", {
        title,
        author,
        isFree,
      })
      .then((res) => setSuccessful(res.data))
      .catch((err) => setMessage("Erreur en creant un nouveau livre"));
  };
  console.log("livre cree", successful);
  return (
    <div className="component2">
      <NavigationBarre />
      <div className="userpage2">
        <div className="NavBarSide2">
          <NavBarSide />
          <Menu />
        </div>
        <div className="container2">
          <h2>Bonjour {firstname}</h2>
          <div className="content2">
            <form className="form-data2" onSubmit={submitPostBook}>
              <h2>Créer un nouveau livre</h2>
              <input
                type="text"
                className="form-control2"
                placeholder="Entrez le titre du livre"
                id="title"
                onChange={handleTitleChange}
                defaultValue={title}
                // onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="text"
                className="form-control2"
                placeholder="Entrez l'auteur du livre"
                id="author"
                onChange={handleAuthorChange}
                defaultValue={author}
                // onChange={(e) => setAuthor(e.target.value)}
              />
              <button type="submit">Envoyer</button>
            </form>

            {successful ? (
              <div className="confirmation2">
                <h2>Nouveau livre ajoute 🎉 </h2>
                <p>Titre: {title}</p>
                <p>Author: {author}</p>
                <p>Livre numéro: {successful.bookId}</p>
                <p>Le livre est disponible {successful.isFree}</p>
                <button type="button" onClick={handleReset}>
                  Créer un autre livre
                </button>
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

export default CreateBook;

import React, { useState, useContext } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Nav from "../components/Nav";
import NavBarSide from "../components/NavBarSide";
import UserContext from "../contexts/UserContext";
import "../styles/test.css";

function ReturnBook() {
  const { firstname } = useContext(UserContext);
  const [bookId, setBookId] = useState("");
  const [message, setMessage] = useState("");

  function handleBookIdChange(e) {
    setBookId(Number(e.target.value));
    if (e.target.value === "") {
      setMessage("");
    }
  }
  async function thisBookExistsAndIsFree(bookId) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/books/${bookId}`
      );
      if (response.status === 404) {
        setMessage("Le livre n'existe pas à cette bibliothèque");
      } else if (response.status === 422) {
        setMessage("Erreur de validation des données");
      } else if (response.status === 500) {
        setMessage("Une erreur est survenue");
      } else {
        const available = response.data.isFree;
        console.log("le livre est disponible ? ", available);
        return available;
      }
    } catch (err) {
      console.log(err);
    }
  }

  const returnOneBook = (e) => {
    axios
      .put(`http://localhost:8000/api/borrowing/${bookId}`)
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
    console.log("Rendered book", message);
    return message;
  };
  async function submitReturnBook(e) {
    e.preventDefault();
    if (e.target.value === "") {
      setMessage("");
    }
    console.log("typeof de bookId", typeof bookId);
    try {
      const isBookFree = await thisBookExistsAndIsFree(bookId);
      if (isBookFree === 1) {
        setMessage("Le livre n'est pas emprunte");
      } else {
        const response = await returnOneBook(bookId);
        if (response.status === 404) {
          setMessage("Le livre n'existe pas dans la liste d'emprunts");
        } else if (response.status === 422) {
          setMessage("Erreur de validation des données");
        } else if (response.status === 500) {
          setMessage("Une erreur est survenue");
        } else if (response.status === 200) {
          setMessage("🎉 Livre rendu avec succès");
        } else {
          setMessage("Une erreur est survenue");
        }
        return message;
      }
    } catch (err) {
      setMessage("Une erreur est survenue");
    }
  }

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
            <form className="form-data2" onSubmit={submitReturnBook}>
              <h2>Rendre le livre</h2>
              <input
                type="text"
                className="form-control2"
                placeholder="Entrez le code de barres du livre"
                id="bookId"
                onChange={handleBookIdChange}
              />
              <button type="submit">Rendre le livre</button>
            </form>
            {message && (
              <div className="confirmation2">
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnBook;

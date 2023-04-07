import React, { useState, useContext } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Nav from "../components/Nav";
import NavBarSide from "../components/NavBarSide";

import UserContext from "../contexts/UserContext";
import "../styles/test.css";

function GetBorrowingsByUserId() {
  const { firstname } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  //   const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("");

  //TO DO
  //Faire la date à la française
  //Si on supprime ce qui est dans le input
  //on cache le div result

  function handleUserIdChange(e) {
    setUserId(Number(e.target.value));
    if (e.target.value === "") {
      setMessage("");
    }
  }
  const submitGetBorrowing = (e) => {
    e.preventDefault();
    console.log(typeof userId);
    axios

      .get(`http://localhost:8000/api/borrowing/${userId}`)
      .then((response) => {
        console.log("type of", typeof response.data);
        if (response.status === 404) {
          setMessage("Pas d'emprunts");
        } else if (response.status === 422) {
          setMessage("Erreur de validation des données");
        } else if (response.status === 500) {
          setMessage("Une erreur est survenue");
        } else {
          setData(response.data);

          return;
        }
      })
      .catch((error) => {
        setMessage("Pas d'emprunts");
      });
    // setLoading(false);

    //   .then((res) => setData(res.data[0]))
    //   .catch((err) => console.log(err));
    // console.log("Data :", data);
    // console.log("data.0", data[0]);
  };
  //   if (loading) {
  //     return <div>Loading...</div>;
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
            <form className="form-data2" onSubmit={submitGetBorrowing}>
              <h2>Consulter les prêts d'un utilisateur</h2>
              <input
                type="text"
                className="form-control2"
                placeholder="Entrez le code de barres de la carte"
                id="userId"
                onChange={handleUserIdChange}
              />

              <button type="submit">Chercher</button>
            </form>
          </div>
          <div>
            {data
              ? data.map((book) => (
                  <div className="confirmation2" key={book.bookId}>
                    {console.log("book", book)}
                    <p>Titre {book.title}</p>
                    <p>Auteur {book.author}</p>
                    <p>Date limite {book.deadlineDate}</p>
                  </div>
                ))
              : null}
            {message ? (
              <div className="confirmation2">
                <p>{message}</p>{" "}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetBorrowingsByUserId;

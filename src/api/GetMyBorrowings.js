import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Nav from "../components/Nav";
import NavBarSide from "../components/NavBarSide";

import UserContext from "../contexts/UserContext";
import "../styles/test.css";

function GetMyBorrowings() {
  const { userId, firstname } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  console.log("userId", userId);

  //TODO

  //Corriger le format de la date

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/borrowing/${userId}`)
      .then((response) => {
        console.log("type of", typeof response.data);
        if (response.status === 404) {
          setMessage("Le livre n'existe pas à cette bibliothèque");
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
    setLoading(false);

    console.log("type of", typeof data);
  }, []);

  console.log("context ", userId);

  // function frechDeadLineDate(date) {

  //     const newDeadlineDate = date.split('T');//je le passe en tableau
  //     console.log("date en tableau", newDeadlineDate)
  //     const dateJs = newDeadlineDate[0];
  //     const dateFr = dateJs.split('-');
  //     setNewDate(dateFr[2] + "-" + dateFr[1] + "-" + dateFr[0]);
  //     console.log('date en français', newDate)

  //     return newDate

  // }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="component2">
      <NavBar />

      <div className="userpage2">
        {/* <h1>GEt borrowings</h1> */}

        <div className="navBarSide2">
          <NavBarSide />
          <Nav />
        </div>
        <div className="container2">
          <h2>Bonjour {firstname}</h2>
          <div className="content2">
            <h2>Vos prêts en cours</h2>
            {message ? <p>{message}</p> : null}

            {data
              ? data.map((book) => (
                  <div className="confirmation2" key={book.bookId}>
                    <p>Titre {book.title}</p>
                    <p>Auteur {book.author}</p>

                    <p>Date limite {book.deadlineDate}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetMyBorrowings;

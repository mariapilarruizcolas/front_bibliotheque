//ça marche aleatoirement
//Refaire isFree en non si l'emprunt est correct
import React, { useState, useContext } from "react";
//import { addDays, format } from "date-fns";
import axios from "axios";
import NavBar from "../components/NavBar";
import Nav from "../components/Nav";
import NavBarSide from "../components/NavBarSide";

import UserContext from "../contexts/UserContext";
import "../styles/test.css";

function CreateBorrowing() {
  let { userId, firstname } = useContext(UserContext);
  userId = Number(userId);
  const [bookId, setBookId] = useState("");
  const [showResult, setShowResult] = useState(false);

  const [available, setAvailable] = useState("");
  const [message, setMessage] = useState("");
  const [deadlineDate, setDeadlineDate] = useState(null);

  //let deadlineDate = null;

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
  function addDaysToDate() {
    const days = 21;
    const resDate = new Date();
    resDate.setDate(resDate.getDate() + days);
    console.log("date retour complete", resDate);
    console.log("type de donnees resDate ", typeof resDate);
    return resDate;
  }

  async function jsDateToMySQLDate(resDate, bookId) {
    const isoString = resDate.toISOString();

    const deadlineDate = isoString.slice(0, 10);

    console.log("mysqlDate", deadlineDate);
    console.log("type de donnee mysqlDate ", typeof deadlineDate);
    //   return deadlineDate;
    // }

    // async function postBorrowing(userId, bookId, deadlineDate) {
    try {
      const response = await axios
        .post("http://localhost:8000/api/borrowing", {
          userId,
          bookId,
          deadlineDate,
        })
        .then((response) => {
          if (response.status === 201) {
            console.log("retour", response.data);
            setMessage("🎉 Livre emprunté avec succès !");
          } else if (response.status === 422) {
            setMessage("Erreur de validation des données");
          } else {
            setMessage("Une erreur est survenue");
          }
        });

      setDeadlineDate(deadlineDate);
      setShowResult(true);
      return;
      // return response.data;
    } catch (error) {
      console.error(error);
      setMessage(error.response.data);
      return error.response.data;
    }
  }

  async function submitPostBorrowing(e) {
    e.preventDefault();
    console.log("typeof de bookId", typeof bookId);
    try {
      // Appeler les trois fonctions de manière asynchrone
      const isBookFree = await thisBookExistsAndIsFree(bookId);
      if (isBookFree === 0) {
        setMessage("Le livre est pas disponible");
        // setDeadlineDate(true);
      } else {
        const resDate = await addDaysToDate();
        // const deadline = await jsDateToMySQLDate(resDate);
        // setDeadlineDate(deadline);
        console.log("deadlineDate error ", deadlineDate);

        // deadlineDate = jsDateToMySQLDate(resDate);

        // Utiliser Promise.all pour attendre que les trois fonctions soient résolues
        await Promise.all([isBookFree]);
        // console.log("Livre disponible ", available);
        // console.log("bookId ", bookId);
        // console.log("type de donnée ", typeof bookId);
        console.log("deadlineDate ", deadlineDate);
        // console.log("type de donnée ", typeof deadlineDate);
        // console.log("userId ", userId);
        // console.log("type de donnée ", typeof userId);

        console.log(bookId, deadlineDate, userId);

        // Si toutes les fonctions sont résolues, appeler postBorrowing avec les trois données
        // await postBorrowing(userId, bookId, deadlineDate);
        await jsDateToMySQLDate(resDate, bookId);

        return bookId, deadlineDate, userId;
      }
    } catch (err) {
      console.log(err.data);
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
            <form className="form-data2" onSubmit={submitPostBorrowing}>
              <h2>Emprunter un livre</h2>
              <input
                type="text"
                className="form-control2"
                placeholder="Entrez le code de barres du livre"
                id="bookId"
                onChange={(e) => setBookId(Number(e.target.value))}
              />

              <button type="submit">Preter</button>
            </form>
            {/* <p>UserId:{userId}</p>
            <p>BookId:{bookId}</p>
            <p>Date de retour: {deadlineDate}</p>
            <p>Clicke?:{showResult}</p>          */}
            {/* {deadlineDate && showResult && ( */}
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

export default CreateBorrowing;

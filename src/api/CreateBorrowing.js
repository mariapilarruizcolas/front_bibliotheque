import React, { useState, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

import UserContext from "../contexts/UserContext";

import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateBorrowing() {
  let { userId, firstname } = useContext(UserContext);
  userId = Number(userId);
  const [bookId, setBookId] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [available, setAvailable] = useState("");
  const [message, setMessage] = useState("");
  const [deadlineDate, setDeadlineDate] = useState(null);

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
    } catch (error) {
      console.error("agargur ", error);
      setMessage(error.response.data);
      return error.response.data;
    }
  }

  async function submitPostBorrowing(e) {
    e.preventDefault();
    console.log("typeof de bookId", typeof bookId);
    try {
      const isBookFree = await thisBookExistsAndIsFree(bookId);
      if (isBookFree === 0) {
        setMessage("Le livre est pas disponible");
      } else {
        const resDate = await addDaysToDate();
        console.log("deadlineDate error ", deadlineDate);
        await Promise.all([isBookFree]);
        // console.log("Livre disponible ", available);
        // console.log("bookId ", bookId);
        // console.log("type de donnée ", typeof bookId);
        console.log("deadlineDate ", deadlineDate);
        // console.log("type de donnée ", typeof deadlineDate);
        // console.log("userId ", userId);
        // console.log("type de donnée ", typeof userId);

        console.log(bookId, deadlineDate, userId);
        await jsDateToMySQLDate(resDate, bookId);
        return bookId, deadlineDate, userId;
      }
    } catch (err) {
      console.log(err.data);
    }
  }

  return (
    <>
      <main class="container-fluid">
        {/* // <div className="component2"> */}
        <NavigationBarre />
        <Container>
          {/* Premier file avec les horaires,
       venir nous voir et le formulaire */}
          <Row className="px-4 my-5">
            <Col sm={4}>
              <NavBarSide />
            </Col>

            <Col sm={8}>
              <Row>
                <Card className="my-3 width-500">
                  <Card.Body>
                    <Card.Title>Bonjour {firstname}</Card.Title>
                    <Card.Text>Bienvenue dans ta page personnel</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <h1 class="font-weigh-light">Emprunter un livre</h1>
                <Form onSubmit={submitPostBorrowing}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Entrez le code de barres du livre"
                      id="bookId"
                      onChange={handleBookIdChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Preter
                  </Button>
                </Form>

                {message ? (
                  <Card className="my-3 width-500">
                    <Card.Body>
                      <Card.Text>
                        <p>{message}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ) : null}
              </Row>
            </Col>
          </Row>

          <Row className="margin-bottom-2">
            <Alert />
          </Row>
        </Container>
      </main>
      <Footer />
    </>
    // <div className="component2">
    //   <NavigationBarre />
    //   <div className="userpage2">
    //     <div className="NavBarSide2">
    //       <NavBarSide />
    //       <Menu />
    //     </div>
    //     <div className="container2">
    //       <h2>Bonjour {firstname}</h2>
    //       <div className="content2">
    //         <form className="form-data2" onSubmit={submitPostBorrowing}>
    //           <h2>Emprunter un livre</h2>
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Entrez le code de barres du livre"
    //             id="bookId"
    //             onChange={handleBookIdChange}
    //           />

    //           <button type="submit">Preter</button>
    //         </form>
    //         {message && (
    //           <div className="confirmation2">
    //             <p>{message}</p>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CreateBorrowing;

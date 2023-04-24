import React, { useState, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

import UserContext from "../contexts/UserContext";

import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//TO DO LISTE
//DEMANDER CONFIRMATION AVANT DE SUPPRIMER

function DeleteBook() {
  const { firstname } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [bookId, setBookId] = useState("");

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
      //setMessage(response.data);
      console.log("Type de données", response.data);
      console.log("Message", message);
      // if (response.status === 200) {
      //   setMessage("🎉 Livre supprimé avec succès!");
      // } else {
      //   setMessage(response.data);
      // }
    } catch (res) {
      setMessage(res.data);
      return res.data;
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
                <h1 class="font-weigh-light">Supprimer un livre</h1>
                <Form onSubmit={submitDeleteBook}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Entrez le code de barres du livre"
                      id="bookId"
                      onChange={handleBookIdChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Suprimer un livre
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
    //         <form className="form-data2" onSubmit={submitDeleteBook}>
    //           <h2>Supprimer un livre</h2>
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Entrez le code de barres du livre"
    //             id="bookId"
    //             onChange={handleBookIdChange}
    //           />

    //           <button type="submit">Suprimer livre</button>
    //         </form>
    //         {message ? (
    //           <div className="confirmation2">
    //             <h2>{message}</h2>
    //           </div>
    //         ) : null}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DeleteBook;

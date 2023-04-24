import React, { useState, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

import UserContext from "../contexts/UserContext";

import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function ReturnBook() {
  const { firstname } = useContext(UserContext);
  const [bookId, setBookId] = useState("");
  const [message, setMessage] = useState("");

  async function thisBookExistsAndIsFree(bookId) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/books/${bookId}`
      );
      const available = response.data.isFree;
      return available;
      // if (response.status === 404) {
      //   setMessage("Le livre n'existe pas à cette bibliothèque");
      // } else if (response.status === 422) {
      //   setMessage("Erreur de validation des données");
      // } else if (response.status === 500) {
      //   setMessage("Une erreur est survenue");
      // } else {
      //   const available = response.data.isFree;
      //   console.log("le livre est disponible ? ", available);
      //   return available;
      // }
    } catch (err) {
      console.log(err);
      setMessage(err.response.data);
    }
  }
  function handleBookIdChange(e) {
    setBookId(Number(e.target.value));
    if (e.target.value === "") {
      setMessage("");
    }
  }

  const returnOneBook = (e) => {
    axios
      .put(`http://localhost:8000/api/borrowing/${bookId}`)
      .then((res) => setMessage(res.data))

      .catch((err) => setMessage(err.response.data));
    console.log("Rendered book", message);
    return message;
  };
  async function submitReturnBook(e) {
    e.preventDefault();

    console.log("typeof de bookId", typeof bookId);

    try {
      const isBookFree = await thisBookExistsAndIsFree(bookId);
      console.log("isBookFree ", isBookFree);
      if (isBookFree === 1) {
        setMessage("Le livre n'est pas emprunte");
      } else {
        const response = await returnOneBook(bookId);
        console.log("Reponse ", response);
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
    } catch (error) {
      console.error("agargur", error);
      setMessage(error.response.data);
    }
    // } catch (err) {
    //   setMessage("Une erreur est survenue");
    // }
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
                <h1 class="font-weigh-light">Rendre un livre</h1>
                <Form onSubmit={submitReturnBook}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Entrez le code de barres du livre"
                      id="bookId"
                      onChange={handleBookIdChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Rendre le livre
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
    //         <form className="form-data2" onSubmit={submitReturnBook}>
    //           <h2>Rendre le livre</h2>
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Entrez le code de barres du livre"
    //             id="bookId"
    //             onChange={handleBookIdChange}
    //           />
    //           <button type="submit">Rendre le livre</button>
    //         </form>
    //         {message ? (
    //           <div className="confirmation2">
    //             <p>{message}</p>
    //           </div>
    //         ) : null}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ReturnBook;

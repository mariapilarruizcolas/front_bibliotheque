import React, { useState, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import NavBarSide from "../components/NavBarSide";

import UserContext from "../contexts/UserContext";

import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//TO DO

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
    <>
      <main class="container-fluid">
        <NavigationBarre />
        <Container>
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
                <h1 class="font-weigh-light">Créer un nouveau livre</h1>
                <Form onSubmit={submitPostBook}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Entrez le titre du livre"
                      id="title"
                      onChange={handleTitleChange}
                      defaultValue={title}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="text"
                      placeholder="Entrez l'auteur du livre"
                      id="author"
                      onChange={handleAuthorChange}
                      defaultValue={author}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Envoyer
                  </Button>
                </Form>
                {successful ? (
                  <Card className="my-3 width-500">
                    <Card.Body>
                      <Card.Text>
                        <h2>Nouveau livre ajoute 🎉 </h2>
                        <p>Titre: {title}</p>
                        <p>Author: {author}</p>
                        <p>Livre numéro: {successful.bookId}</p>
                        <p>Le livre est disponible {successful.isFree}</p>
                        <Button type="button" onClick={handleReset}>
                          Créer un autre livre
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ) : null}
                {message ? (
                  <Card className="my-3 width-500">
                    <Card.Body>
                      <Card.Text>
                        <p>{message}</p>
                        <Button type="button" onClick={handleReset}>
                          Créer un autre livre
                        </Button>
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
    //         <form className="form-data2" onSubmit={submitPostBook}>
    //           <h2>Créer un nouveau livre</h2>
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Entrez le titre du livre"
    //             id="title"
    //             onChange={handleTitleChange}
    //             defaultValue={title}
    //             // onChange={(e) => setTitle(e.target.value)}
    //           />

    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Entrez l'auteur du livre"
    //             id="author"
    //             onChange={handleAuthorChange}
    //             defaultValue={author}
    //             // onChange={(e) => setAuthor(e.target.value)}
    //           />
    //           <button type="submit">Envoyer</button>
    //         </form>
  );
}

export default CreateBook;

import React, { useState, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

import UserContext from "../contexts/UserContext";

import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function GetBorrowingsByUserId() {
  const { firstname } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  //   const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("");

  //TO DO
  //Faire la date à la française

  function handleUserIdChange(e) {
    setUserId(Number(e.target.value));
    console.log("userId", userId);
    if (e.target.value === "") {
      setMessage("");
      setData("");
    }
  }
  const submitGetBorrowing = (e) => {
    e.preventDefault();
    console.log(typeof userId);
    axios

      .get(`http://localhost:8000/api/borrowing/${userId}`)
      .then((response) => {
        console.log("type of", typeof response.data);
        console.log("response", response.data);
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
        setMessage(error.response.data);
        console.log("error", error);
        //setMessage("Pas d'emprunts");
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
                <h1 class="font-weigh-light">
                  Consulter les prêts d'un utilisateur
                </h1>
                <Form onSubmit={submitGetBorrowing}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Entrez le code de barres de la carte"
                      id="userId"
                      onChange={handleUserIdChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Chercher
                  </Button>
                </Form>
                {data
                  ? data.map((book) => (
                      <Card className="my-3 width-500">
                        <Card.Body>
                          <Card.Text>
                            <p>Titre {book.title}</p>
                            <p>Auteur {book.author}</p>
                            <p>Date limite {book.deadlineDate}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ))
                  : null}

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
    //         <form className="form-data2" onSubmit={submitGetBorrowing}>
    //           <h2>Consulter les prêts d'un utilisateur</h2>
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Entrez le code de barres de la carte"
    //             id="userId"
    //             onChange={handleUserIdChange}
    //           />

    //           <button type="submit">Chercher</button>
    //         </form>
    //       </div>
    //       <div>
    //         {console.log("Message", message)}
    //         {console.log("books", data[0])}
    //         {data
    //           ? data.map((book) => (
    //               <div className="confirmation2" key={book.bookId}>
    //                 {console.log("book", book)}
    //                 <p>Titre {book.title}</p>
    //                 <p>Auteur {book.author}</p>
    //                 <p>Date limite {book.deadlineDate}</p>
    //               </div>
    //             ))
    //           : null}
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

export default GetBorrowingsByUserId;

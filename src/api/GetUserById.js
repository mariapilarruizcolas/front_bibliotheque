import React, { useState, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import UserContext from "../contexts/UserContext";

import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function GetUserById() {
  const { firstname } = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  function handleUserIdChange(e) {
    setUserId(Number(e.target.value));
    if (e.target.value === "") {
      setMessage("");
      setData("");
    }
  }

  const submitGetUserById = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8000/api/users/${userId}`)
      .then((res) => setData(res.data))
      .catch((err) => setMessage("L'utilisateur n'existe pas"));

    console.log("Data user", data);
  };

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
                  Consulter les données d'un utilisateur
                </h1>
                <Form onSubmit={submitGetUserById}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Entrez le numero de l'utilisateur"
                      id="userId"
                      onChange={handleUserIdChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Chercher
                  </Button>
                </Form>
                {data ? (
                  <Card className="my-3 width-500">
                    <Card.Body>
                      <Card.Text>
                        <h2>Données de l'utilisateur numéro: {data.userId} </h2>
                        <p>Prénom: {data.firstname}</p>
                        <p>Adresse email: {data.email}</p>
                        <p>Droits d'administrateur: {data.admin}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ) : null}
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
    //         <form className="form-data2" onSubmit={submitGetUserById}>
    //           <h2>Consulter les données d'un utilisateur</h2>
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Entrez le numero d'identification de l'utilisateur"
    //             id="userId"
    //             onChange={handleUserIdChange}
    //           />
    //           <button type="submit">Chercher</button>
    //         </form>

    //         {data ? (
    //           <div className="confirmation2">
    //             <h2>Données de l'utilisateur numéro: {data.userId} </h2>
    //             <p>Prénom: {data.firstname}</p>
    //             <p>Adresse email: {data.email}</p>
    //             <p>Droits d'administrateur: {data.admin}</p>
    //           </div>
    //         ) : null}
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

export default GetUserById;

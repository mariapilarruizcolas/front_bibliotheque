import React, { useState, useContext } from "react";
import axios from "axios";

import AuthContext from "../contexts/AuthContext";
import NavigationBarre from "../components/NavigationBarre";
import Infos from "../components/Infos";

import Footer from "../components/Footer";
import Alert from "../components/Alert";
// import '../styles/test.css';
import {
  Button,
  Form,
  Nav,
  NavBar,
  Carousel,
  NavDropdown,
  Container,
  Row,
  Col,
  Image,
  Card,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Register(credentials) {
  const { isAuthenticated } = useContext(AuthContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState("");

  const submitPostUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users", {
        firstname,
        lastname,
        email,
        admin,
        password,
      })
      .then((res) => setSuccessful(res))

      .catch((err) => console.log(err));
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
              <Infos />
            </Col>

            <Col sm={8}>
              <Row>
                {/* <form className="form-data2" onSubmit={submitPostUser}> */}
                <Form onSubmit={submitPostUser}>
                  {isAuthenticated ? (
                    <h1 class="font-weigh-light">
                      Créer un nouveau utilisateur
                    </h1>
                  ) : (
                    <h1 class="font-weigh-light">S'inscrire</h1>
                  )}

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      className="form-control2"
                      placeholder="Prénom"
                      id="firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="form-control2"
                      placeholder="Nom"
                      id="lastname"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="form-control2"
                      placeholder="Email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="form-control2"
                      placeholder="Vous êtes administrateur?"
                      id="admin"
                      onChange={(e) => setAdmin(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      className="form-control2"
                      placeholder="Mot de passe"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Envoyer
                  </Button>
                </Form>
              </Row>
              <Row>
                {successful ? (
                  <Card className="my-3 width-500">
                    <Card.Body>
                      <Card.Text>
                        <h2>Inscription reussite 🎉 </h2>
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
  );
}

{
  /* <div className="confirmation">
                        <h2>{
                            isAuthenticated ? 'Vous êtes authentifie' : 'Vous êtes pas authentifie'
                        }</h2>
                        <h2>Données recues</h2>
                        <p>firstname:{firstname}</p>
                        <p>lastname:{lastname}</p>

                        <p>admin{admin}</p>
                    </div> */
}

export default Register;

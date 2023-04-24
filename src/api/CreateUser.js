import React, { useState, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

//to do
//le message de bienvenue change de firstname quand tu rempli le formulaire

import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Register(credentials) {
  // const [showResults, setShowResults] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");

  function handleFirstNameChange(e) {
    if (e.target.value.firstname === "") {
      setMessage("");
    }
  }
  const handleReset = (e) => {
    setFirstname("");
    setLastname("");
    setMessage("");
    setEmail("");
    setAdmin("");
    setPassword("");

    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("admin").value = "";
    document.getElementById("password").value = "";
  };
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
      .then((res) => {
        setMessage(res.data);
        console.log("Message", message);
      })

      .catch((err) => setMessage(err.response.data));
    return message;
  };
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
                    <Card.Title>Bonjour </Card.Title>
                    <Card.Text>Bienvenue dans ta page personnel</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                {/* <form className="form-data2" onSubmit={submitPostUser}> */}
                <Form onSubmit={submitPostUser}>
                  <h1 class="font-weigh-light">Créer un nouveau utilisateur</h1>

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
                      type="password"
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
                {message ? (
                  <Card className="my-3 width-500">
                    <Card.Body>
                      <Card.Text>
                        <h2>{message} </h2>
                        <Button type="button" onClick={handleReset}>
                          Créer un autre utilisateur
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
    //       <h2>Bonjour </h2>

    //       <div className="content2">
    //         <form className="form-data2" onSubmit={submitPostUser}>
    //           <h2>Créer un nouveau utilisateur</h2>
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Prénom"
    //             // id="firstname" onChange={(e) => setFirstname(e.target.value)} />
    //             id="firstname"
    //             onChange={handleFirstNameChange}
    //           />
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Nom"
    //             id="lastname"
    //             onChange={(e) => setLastname(e.target.value)}
    //           />

    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Email"
    //             id="email"
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Vous êtes administrateur?"
    //             id="admin"
    //             onChange={(e) => setAdmin(e.target.value)}
    //           />
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Mot de passe"
    //             id="password"
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //           <button type="submit">Envoyer</button>
    //         </form>
    //       </div>
    //       {showResults ? (
    //         <div className="confirmation2">
    //           <h2> {message}</h2>
    //         </div>
    //       ) : null}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Register;

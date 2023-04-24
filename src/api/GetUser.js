import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

import UserContext from "../contexts/UserContext";
import { Container, Row, Col, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

// //FAIRE UN BOUTON MODIFIER qui envoie un email
function GetUser() {
  const { userId, firstname } = useContext(UserContext);
  const [data, setData] = useState("");
  console.log(userId);
  useEffect(() => {
    axios

      .get(`http://localhost:8000/api/users/${userId}`)

      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      <main class="container-fluid">
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
                    <Card.Text>Bienvenue dans ta page personnelle</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <h1 class="font-weigh-light">Vos données personnelles</h1>

                <Card className="my-3 width-500">
                  <Card.Body>
                    <Card.Text>
                      <p>Prénom: {data.firstname}</p>
                      <p>Nom: {data.lastname}</p>
                      <p>Adresse email: {data.email}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
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
    //       <h2>Bonjour {firstname} </h2>
    //       <div className="confirmation2">
    //         <h2>Vos données personnels</h2>
    //         <p>Prénom: {data.firstname}</p>
    //         <p>Nom: {data.lastname}</p>
    //         <p>Adresse email: {data.email}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default GetUser;

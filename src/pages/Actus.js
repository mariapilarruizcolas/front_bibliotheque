import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBarre from "../components/NavigationBarre";
import Infos from "../components/Infos";
import Formu from "../components/Formu";
import News from "../components/News";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
//import "../styles/test.css";
//to do creer un context pour savoir le livre qui a été clické
//et le recuperer apres sur l'emprunt
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

function Actus() {
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
              <Row className="justify-content-center">
                <h1>Les actus de la semaine</h1>
                <Card className=" m-2" style={{ width: "18rem" }}>
                  <Card.Img
                    className="d-block "
                    src={process.env.PUBLIC_URL + "/img/bebe.png"}
                    alt="First slide"
                    width="400"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h4>Lectures pour les tous petits</h4>
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className=" m-2" style={{ width: "18rem" }}>
                  <Card.Img
                    className="d-block "
                    src={process.env.PUBLIC_URL + "/img/printemps.png"}
                    alt="Second slide"
                    width="400"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h4>Le festival des lectures du printemps</h4>
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>{" "}
                <Card className=" m-2" style={{ width: "18rem" }}>
                  <Card.Img
                    className="d-block"
                    src={process.env.PUBLIC_URL + "/img/jeux-videos.png"}
                    alt="Third slide"
                    width="400"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h4>Après-midi jeux vidéos</h4>
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className=" m-2" style={{ width: "18rem" }}>
                  <Card.Img
                    className="d-block"
                    src={process.env.PUBLIC_URL + "/img/sos.png"}
                    alt="Sos slide"
                    width="400"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h4>Atéliers Sos numériques</h4>
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
  );
}

export default Actus;

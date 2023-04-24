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

function Home() {
  const navigate = useNavigate();
  const clickToCreateBorrowing = (e) => {
    e.preventDefault();
    navigate("./login", { replace: true });
  };
  const clickToReturnBook = (e) => {
    e.preventDefault();
    navigate("./returnBook", { replace: true });
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
              <Formu />
              <News />
              <Row className=" my-5">
                <div className="buttonsBorrowing">
                  <Button
                    variant="outline-info"
                    className="me-4"
                    onClick={clickToCreateBorrowing}
                  >
                    Emprunter un livre
                  </Button>

                  <Button variant="outline-info" onClick={clickToReturnBook}>
                    Rendre un livre
                  </Button>
                  {/* <Button className="borrowing" onClick={clickToCreateBorrowing}>
                Emprunter un livre
              </Button>
              <Button className="borrowing" onClick={clickToReturnBook}>
                Rendre un livre
              </Button> */}
                </div>
              </Row>
            </Col>
          </Row>
          <Row></Row>

          <Row className="margin-bottom-2">
            <Alert />
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Home;

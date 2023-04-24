import React, { useContext } from "react";
import NavigationBarre from "../components/NavigationBarre";
//import Menu from "../components/Menu";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

import UserContext from "../contexts/UserContext";
import "../styles/test.css";
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

function UserPage() {
  const { admin, firstname, userId, email } = useContext(UserContext);
  console.log("userId", userId);
  console.log("firstname", firstname);
  console.log("email", email);
  console.log("admin", admin);
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
              <Card className="my-3 width-500">
                <Card.Body>
                  <Card.Title>Bonjour {firstname}</Card.Title>
                  <Card.Text>Bienvenue dans ta page personnel</Card.Text>
                </Card.Body>
              </Card>
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

export default UserPage;

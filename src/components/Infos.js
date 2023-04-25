import React from "react";

import { Col, Card, Container } from "react-bootstrap";
import "../global.css";

import "bootstrap/dist/css/bootstrap.min.css";
function Infos() {
  return (
    <Col sm={4}>
      <Container>
        <Card style={{ width: "18rem" }} className="my-3 ">
          <Card.Body>
            <Card.Title>Nos horaires</Card.Title>
            <Card.Text>
              <p> Mardi : 15h - 19h </p>
              <p>Mercredi : 10h - 18h</p>
              <p>Vendredi : 10h - 12h et 15h - 19h</p>
              <p>Samedi : 10h- 18h</p>
              <p>mediatheque@leperreux94.fr</p> <p>01 48 71 38 57</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="d-sm-flex justify-content-center"
        >
          <Card.Body>
            <Card.Title>Venir nous voir</Card.Title>
            <Card.Img variant="top" src="img/situation.png" />
          </Card.Body>
        </Card>
      </Container>
    </Col>
  );
}
export default Infos;

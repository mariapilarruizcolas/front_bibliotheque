import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  Button,
  Form,
  Nav,
  NavigationBarre,
  Carousel,
  NavDropdown,
  Container,
  Row,
  Col,
  Image,
  Card,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function Infos() {
  return (
    <Col sm={4}>
      <Card style={{ width: "18rem" }} className="my-3">
        <Card.Body>
          <Card.Title>Nos horaires</Card.Title>
          <Card.Text>
            Mardi : 15h - 19h Mercredi : 10h - 18h Vendredi : 10h - 12h et 15h -
            19h Samedi : 10h - 18h mediatheque@leperreux94.fr 01 48 71 38 57{" "}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="my-3">
        <Card.Body>
          <Card.Title>Venir nous voir</Card.Title>
          <Card.Img variant="top" src="https://picsum.photos/id/200/320/200" />
        </Card.Body>
      </Card>
    </Col>
  );
}
export default Infos;

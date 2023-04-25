import React from "react";

import { Nav, Carousel, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function News() {
  return (
    <Row className="mt-3" style={{ height: "auto" }}>
      <Col sm={3} className="bg-info"></Col>
      <Col sm={6} className="bg-warning">
        <h1>Les actualités de la semaine</h1>
        <Carousel className="carousel-dark">
          <Carousel.Item>
            <Nav.Link href="/Actus">
              <div className="stretched-link">
                <img
                  className="d-block "
                  src={process.env.PUBLIC_URL + "/img/bebe.png"}
                  alt="First slide"
                  width="400"
                />

                <Carousel.Caption className="bg-light m-1 mb-0">
                  {/* <Carousel.Caption className=" bg-light text-dark "> */}
                  <h4>Lectures pour les tous petits</h4>
                </Carousel.Caption>
                {/* <div className="carousel-caption  d-block">
              <div className="caption-content py-1">
                <h4>Lectures pour les tous petits</h4>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div> */}
              </div>
            </Nav.Link>
          </Carousel.Item>
          <Carousel.Item>
            <Nav.Link href="/Actus">
              <div className="stretched-link">
                <img
                  className="d-block "
                  src={process.env.PUBLIC_URL + "/img/printemps.png"}
                  alt="Second slide"
                  width="400"
                />

                <Carousel.Caption className="bg-light m-1">
                  <h4>Le festival des lectures du printemps</h4>
                </Carousel.Caption>
              </div>
            </Nav.Link>
          </Carousel.Item>
          <Carousel.Item>
            <Nav.Link href="/Actus">
              <div className="stretched-link">
                <img
                  className="d-block"
                  src={process.env.PUBLIC_URL + "/img/jeux-videos.png"}
                  alt="Third slide"
                  width="400"
                />

                <Carousel.Caption className="bg-light m-1">
                  <h4>Après-midi jeux vidéos</h4>
                </Carousel.Caption>
              </div>
            </Nav.Link>
          </Carousel.Item>
          <Carousel.Item>
            <Nav.Link href="/Actus">
              <div className="stretched-link">
                <img
                  className="d-block"
                  src={process.env.PUBLIC_URL + "/img/sos.png"}
                  alt="Sos slide"
                  width="400"
                />

                <Carousel.Caption className="bg-light m-1">
                  <h4>Atéliers Sos numériques</h4>
                </Carousel.Caption>
              </div>
            </Nav.Link>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col sm={3} className="bg-info"></Col>
    </Row>
  );
}
export default News;

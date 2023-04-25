import React from "react";

import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
function Alert() {
  return (
    <Card className="text-center bg-warning text-dark position-fixed w-50">
      <Card.Body>
        Attention la bibliothèque sera en travaux du 3 avril jusqu'à le 10 mai
      </Card.Body>
    </Card>
  );
}

export default Alert;

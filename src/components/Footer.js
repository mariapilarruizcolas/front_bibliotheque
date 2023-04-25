import React from "react";

import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <footer class="py-3   position-fixed bg-dark  container-fluid  bottom-0 mt-2">
      <Container className="px-4">
        <p class="text-center text-white">Made with love 💖 by Pili</p>
      </Container>
    </footer>
  );
}

export default Footer;

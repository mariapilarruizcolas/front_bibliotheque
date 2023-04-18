import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

import Form from "../components/Form";
import "../styles/test.css";
//to do creer un context pour savoir le livre qui a été clické
//et le recuperer apres sur l'emprunt

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
    <div className="component2" style={{ backgroundImage: "/img/fond.jpg" }}>
      <NavBar />

      <Form />
      <div className="buttonsBorrowing">
        <button className="borrowing" onClick={clickToCreateBorrowing}>
          Emprunter un livre
        </button>
        <button className="borrowing" onClick={clickToReturnBook}>
          Rendre un livre
        </button>
      </div>
    </div>
  );
}

export default Home;

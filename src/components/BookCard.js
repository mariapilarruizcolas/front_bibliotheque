import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ index, title, author, isFree, image }) => {
  const navigate = useNavigate();

  const HandleBorrowing = (e) => {
    ////////////////////TO DO //////
    //Verifier s'il est authentifie direct createBorrowing
    //Si pas authentifie aller a Login et apres a createBorrowing

    navigate("./Login", { replace: true });
  };

  return (
    <div className="BookCard">
      <img
        className="photoBook"
        src={`${window.location.origin}/${image}`}
        alt={title}
      />
      <h2>{title}</h2>
      <p>de {author}</p>
      {/* 0 non et 1 yes */}
      <p>Il est libre? {isFree ? "Oui" : "Non"}</p>
      <button className="btn" type="submit" onClick={HandleBorrowing}>
        Emprunter
      </button>
    </div>
  );
};

export default BookCard;
//title, author, is_free

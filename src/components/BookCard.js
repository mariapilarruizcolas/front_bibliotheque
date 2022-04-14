import React from 'react';
import './BookCard.css';

const BookCard = ({ key, title, author, is_free }) => (
  < div className="BookCard">
    <h1>{title}</h1>
    <h2>de {author}</h2>
    <h3>Disponible? : {is_free}</h3>

  </div>
);

export default BookCard;

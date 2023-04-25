import axios from "axios";
import React, { useState } from "react";

//import "../styles/test.css";
import BookCard from "./BookCard";
import { Button, Form, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function Formu() {
  const [showResults, setShowResults] = useState(false);
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  // useEffect(() => {
  //   console.log("Livres :", books);
  // }, [books]);

  const submitSelectedBooks = (e) => {
    setShowResults(!showResults);
    e.preventDefault();
    if (title.length > 3 || author.length > 3) {
      axios.get("http://localhost:8000/api/books/").then((res) => {
        setBooks(res.data[0], () => {
          console.log("Resultat Avant filtre ", books[0]);
        });
      });
    }
  };

  return (
    <>
      <Row>
        <h1 class="font-weigh-light">Chercher un livre</h1>
        <Form onSubmit={submitSelectedBooks}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Auteur"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Titre"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Chercher
          </Button>
        </Form>
      </Row>
      <Row>
        {showResults ? (
          <div
            className={`confirmation ${
              title.length === 0 && author.length === 0 ? "visible" : ""
            }`}
          >
            <h2>Votre selection</h2>
            {books
              .filter(
                (book) =>
                  book.author.toLowerCase().includes(author.toLowerCase()) &&
                  book.title.toLowerCase().includes(title.toLowerCase())
              )
              .slice(0, 3)
              .map((book, index) => (
                <BookCard
                  key={book.bookId}
                  title={book.title}
                  author={book.author}
                  isFree={book.isFree}
                  image={book.img}
                />
              ))}
            {books.filter(
              (book) =>
                book.author.toLowerCase().includes(author.toLowerCase()) &&
                book.title.toLowerCase().includes(title.toLowerCase())
            ).length === 0 && (
              <p className="error-message">
                Aucun livre ne correspond à votre recherche
              </p>
            )}
          </div>
        ) : null}
      </Row>
    </>
  );
}
export default Formu;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

import UserContext from "../contexts/UserContext";

import { Container, Row, Col, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function GetMyBorrowings() {
  const { userId, firstname } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  console.log("userId", userId);

  //TODO

  //Corriger le format de la date

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/borrowing/${userId}`)
      .then((response) => {
        console.log("type of", typeof response.data);

        if (response.status === 404) {
          setMessage("Le livre n'existe pas à cette bibliothèque");
        } else if (response.status === 422) {
          setMessage("Erreur de validation des données");
        } else if (response.status === 500) {
          setMessage("Une erreur est survenue");
        } else {
          setData(response.data);

          return;
        }
      })
      .catch((error) => {
        setMessage("Pas d'emprunts");
      });
    setLoading(false);

    console.log("type of", typeof data);
  }, []);

  console.log("context ", userId);

  // function frechDeadLineDate(date) {

  //     const newDeadlineDate = date.split('T');//je le passe en tableau
  //     console.log("date en tableau", newDeadlineDate)
  //     const dateJs = newDeadlineDate[0];
  //     const dateFr = dateJs.split('-');
  //     setNewDate(dateFr[2] + "-" + dateFr[1] + "-" + dateFr[0]);
  //     console.log('date en français', newDate)

  //     return newDate

  // }

  if (loading) {
    return <div>Loading...</div>;
  }
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
              <Row>
                <Card className="my-3 width-500">
                  <Card.Body>
                    <Card.Title>Bonjour {firstname}</Card.Title>
                    <Card.Text>Bienvenue dans ta page personnel</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <h1 class="font-weigh-light">Vos prêts en cours</h1>

                {data
                  ? data.map((book) => {
                      const formattedDate = new Date(
                        book.deadlineDate
                      ).toLocaleDateString("fr-FR");
                      return (
                        <Card className="my-3 width-500" key={book.title}>
                          <Card.Body>
                            <Card.Text>
                              <p>Titre {book.title}</p>
                              <p>Auteur {book.author}</p>
                              <p>Date limite {formattedDate}</p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })
                  : null}

                {message ? (
                  <Card className="my-3 width-500">
                    <Card.Body>
                      <Card.Text>
                        <p>{message}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ) : null}
              </Row>
            </Col>
          </Row>

          <Row className="margin-bottom-2">
            <Alert />
          </Row>
        </Container>
      </main>
      <Footer />
    </>
    // <div className="component2">
    //   <NavigationBarre />

    //   <div className="userpage2">
    //     {/* <h1>GEt borrowings</h1> */}

    //     <div className="NavBarSide2">
    //       <NavBarSide />
    //       <Menu />
    //     </div>
    //     <div className="container2">
    //       <h2>Bonjour {firstname}</h2>
    //       <div className="content2">
    //         <h2>Vos prêts en cours</h2>
    //         {message ? <p>{message}</p> : null}

    //         {data
    //           ? data.map((book) => (
    //               <div className="confirmation2" key={book.bookId}>
    //                 <p>Titre {book.title}</p>
    //                 <p>Auteur {book.author}</p>

    //                 <p>Date limite {book.deadlineDate}</p>
    //               </div>
    //             ))
    //           : null}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default GetMyBorrowings;

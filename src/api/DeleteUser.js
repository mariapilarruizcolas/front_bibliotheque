import React, { useState, useContext } from "react";
import axios from "axios";

import NavigationBarre from "../components/NavigationBarre";
import NavBarSide from "../components/NavBarSide";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

import UserContext from "../contexts/UserContext";

import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//TO DO LISTE
//DEMANDER CONFIRMATION AVANT DE SUPRIMER

function DeleteUser() {
  const { firstname } = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  function handleUserIdChange(e) {
    setUserId(Number(e.target.value));
    if (e.target.value === "") {
      setMessage("");
    }
  }
  async function submitDeleteUser(e) {
    e.preventDefault();
    console.log("typeOf", typeof userId);

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/users/${userId}`
      );
      console.log("Reponse", response);

      setMessage(response.data);
      console.log("Message", message);
    } catch (error) {
      console.error("agargur ", error);
      setMessage(error.response.data);
      return error.response.data;
    }
  }

  //   async function submitDeleteUser(e) {
  //     e.preventDefault();

  //     try {
  //       const reponse = await axios.delete(
  //         `http://localhost:8000/api/users/${userId}`
  //       );
  //       //   if (reponse.status === 404) {
  //       //     setMessage("Utilisateur non trouvé");
  //       //   } else if (reponse.status === 200) {
  //       //     setMessage("🎉 Utilisateur suprimé avec succès!");
  //       //   } else if (reponse.status === 403) {
  //       //     setMessage(
  //       //       "L'utilisateur a des emprunts en cours et il ne peut pas être supprimé"
  //       //     );
  //       //   } else if (reponse.status === 500) {
  //       //     setMessage("Une erreur est survenue");
  //       //   } else {
  //       //     setMessage("Une erreur est survenue");
  //       //   }
  //       return message;
  //     } catch (err) {
  //       if (err.status === 404) {
  //         setMessage("Utilisateur non trouvé");
  //       } else if (err.status === 200) {
  //         setMessage("🎉 Utilisateur suprimé avec succès!");
  //       } else if (err.status === 403) {
  //         setMessage(
  //           "L'utilisateur a des emprunts en cours et il ne peut pas être supprimé"
  //         );
  //       } else if (err.status === 500) {
  //         setMessage("Une erreur est survenue");
  //       }
  //       console.log(err);
  //     }
  //   }

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
                <h1 class="font-weigh-light">Supprimer un utilisateur</h1>
                <Form onSubmit={submitDeleteUser}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Entrez le numero de l'utilisateur"
                      id="userId"
                      onChange={handleUserIdChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Suprimer utilisateur
                  </Button>
                </Form>

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
    //     <div className="NavBarSide2">
    //       <NavBarSide />
    //       <Menu />
    //     </div>
    //     <div className="container2">
    //       <h2>Bonjour {firstname}</h2>
    //       {/* // {console.log("data", data)} */}
    //       <div className="content2">
    //         <form className="form-data2" onSubmit={submitDeleteUser}>
    //           <h2>Supprimer un utilisateur</h2>
    //           <input
    //             type="text"
    //             className="form-control2"
    //             placeholder="Entrez le numero de l'utilisateur"
    //             id="userId"
    //             onChange={handleUserIdChange}
    //           />

    //           <button type="submit">Suprimer utilisateur</button>
    //         </form>

    //         {message ? (
    //           <div className="confirmation2">
    //             {/* <h2>🎉 Utilisateur supprimé! </h2> */}
    //             <h2>{message}</h2>
    //           </div>
    //         ) : null}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DeleteUser;

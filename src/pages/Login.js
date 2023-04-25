import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Authenticate from "../services/Authenticate";
import "../components/Form.css";
import openEye from "../icons/openEye.svg";
import closedEye from "../icons/closedEye.svg";

import AuthContext from "../contexts/AuthContext";

import Infos from "../components/Infos";
import News from "../components/News";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import NavigationBarre from "../components/NavigationBarre";
//import "../styles/test.css";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  //const [success, setSuccess] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState("");
  const [credentials, setCredentials] = useState({
    //ici on met les name
    email: "",
    password: "",
  });

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  //currentTarget est le contenu de l'input actuel
  const HandleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (name === "email" && value === "") {
      setMessage("");
    } else if (name === "password" && value === "") {
      setMessage("");
    }
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await Authenticate.Authenticate(credentials, setSuccess, setMessage);
      console.log("Chui");
    } catch (err) {
      console.log(err);
      setMessage("Invalid credentials");
    } finally {
      setIsLoading(false); //mettre isLoading à false une fois que l'authentification est terminée
    }
  };
  useEffect(() => {
    if (success) {
      setIsAuthenticated(true);
      navigate("./userpage", { replace: true });
    }
    // }, [success, navigate, setIsAuthenticated]);
  }, [success]);

  //       setMessage("Invalid credentials");
  //     }
  //   } catch (err) {
  //     setMessage(err.message);
  //     console.log(err);
  //   }
  // };

  // const HandleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const authResult = await Authenticate.Authenticate(
  //       credentials,
  //       setSuccess
  //     );

  //     if (authResult.success) {
  //       console.log("isAuthenticated: ", isAuthenticated);

  //       navigate("./userpage", { replace: true });
  //       return;
  //     } else {
  //       setMessage("invalid credentials");
  //     }
  //   } catch (err) {
  //     setMessage(err.message);
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <main class="container-fluid">
        <NavigationBarre />
        <Container>
          {/* Premier file avec les horaires,
         venir nous voir et le formulaire */}
          <Row className="px-4 my-5">
            <Col sm={4}>
              <Infos />
            </Col>

            <Col sm={8}>
              <Row>
                <h1 class="font-weigh-light">Veuillez-vous connecter</h1>
                <Form onSubmit={HandleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      className="form-control2"
                      placeholder="Identifiant"
                      id="email"
                      name="email"
                      onChange={HandleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type={passwordIsVisible ? "test" : "password"}
                      className="form-control2"
                      placeholder="Mot de passe "
                      id="password"
                      name="password"
                      onChange={HandleChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Se connecter
                  </Button>
                  <span
                    onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                  >
                    <img
                      src={passwordIsVisible ? openEye : closedEye}
                      alt={
                        passwordIsVisible ? "openEye icon" : "closedEye icon"
                      }
                      width="32"
                    />
                  </span>
                </Form>
                {isLoading ? (
                  <div className="loading">
                    <p>Chargement en cours...</p>
                  </div>
                ) : (
                  message && (
                    <div className="confirmation2">
                      <p>{message}</p>
                    </div>
                  )
                )}
              </Row>

              <News />
            </Col>
          </Row>

          <Row className="margin-bottom-2">
            <Alert />
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}
export default Login;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import AuthContext from "../contexts/AuthContext";
import "../styles/NavigationBarre.css";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Form,
  Nav,
  NavigationBarre,
  Carousel,
  NavDropdown,
  Container,
  Row,
  Col,
  Image,
  Card,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

{
  /* <header>
<NavigationBarre bg="info" variant="dark" expand="lg" style={{ color: "dark" }}>
  <Container>
    <NavigationBarre.Brand href="#home">
      La bibliothèque de mon village
    </NavigationBarre.Brand>
    <NavigationBarre.Toggle aria-controls="basic-NavigationBarre-nav" />
    <NavigationBarre.Collapse id="basic-NavigationBarre-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">S'incrire</Nav.Link>
        <Nav.Link href="#link">Se connecter</Nav.Link>
        <Nav.Link to="/Login">Se Connecter</Nav.Link>
        <Nav.Link to="/Register">S'enregistrer </Nav.Link>
     
      </Nav>
    </NavigationBarre.Collapse>
  </Container>
</NavigationBarre>
</header> */
}
function NavigationBarre() {
  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log("identifie", isAuthenticated);
  const clickToLogIn = (e) => {
    e.preventDefault();
    navigate("./login", { replace: true });
  };
  const clickToRegister = (e) => {
    e.preventDefault();
    navigate("./register", { replace: true });
  };

  const handleLogout = () => {
    Logout();
    setIsAuthenticated(false);
    navigate("../login", { replace: true });
  };
  // const [showLinks, setShowLinks] = useState(false);
  // const handleShowLinks = () => {
  //     //Au click on va montrer seulement si showLinks a changé donc s'il est true
  //     setShowLinks(!showLinks)
  // }

  return (
    <div className="containerNavigationBarre2">
      <NavLink to="/">
        <h1>La bibliothèque de mon village</h1>{" "}
      </NavLink>

      <nav className="NavigationBarre_desktop">
        {
          isAuthenticated === "true" ? (
            <ul className="NavigationBarreUl">
              <NavLink
                to="/userpage"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Espace Personnel </li>
              </NavLink>
              <button className="btn-danger" onClick={handleLogout}>
                Déconnexion
              </button>
            </ul>
          ) : (
            <ul className="NavigationBarreUl">
              <NavLink
                to="/Login"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>Se Connecter </li>
              </NavLink>
              <NavLink
                to="/Register"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                <li>S'enregistrer </li>
              </NavLink>
            </ul>
          )
          // : (
          //     <ul className='NavigationBarreUl'>

          //         <NavLink to="/userpage" className={(nav) => nav.isActive ? "nav-active" : ""}>
          //             <li>Espace Personnel </li></NavLink>
          //         <button className="btn-danger" onClick={handleLogout}>Déconnexion</button>
          //     </ul>
          // )
        }

        <ul className="NavigationBarreUl">
          <NavLink
            to="/aide"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Aide </li>
          </NavLink>
        </ul>
      </nav>
      {!isAuthenticated && (
        <div className="buttonsBar">
          <button className="mobile_link" onClick={clickToLogIn}>
            Se connecter
          </button>
          <button className="mobile_link" onClick={clickToRegister}>
            S'enregistrer
          </button>
        </div>
      )}
    </div>
  );
}

export default NavigationBarre;

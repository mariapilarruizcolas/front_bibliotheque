import React, { useContext } from "react";
//import { NavLink } from "react-router-dom";
//import Logout from "./Logout";
import AuthContext from "../contexts/AuthContext";
//import "../styles/NavBar.css";
//import { useNavigate } from "react-router-dom";

import { Nav, Navbar, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
//TO DO
//Inclure si on est connecte à la place de se connecter mettre Logout
function NavigationBarre() {
  //const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log("identifie", isAuthenticated);
  // const clickToLogIn = (e) => {
  //   e.preventDefault();
  //   navigate("./login", { replace: true });
  // };
  // const clickToRegister = (e) => {
  //   e.preventDefault();
  //   navigate("./register", { replace: true });
  // };

  // const handleLogout = () => {
  //   Logout();
  //   setIsAuthenticated(false);
  //   navigate("../login", { replace: true });
  // };

  return (
    // <div className="containerNavigationBarre2">
    <header>
      <Navbar bg="info" variant="dark" expand="lg" style={{ color: "dark" }}>
        <Container>
          <Navbar.Brand href="/">La bibliothèque de mon village</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-Navbar-nav" />
          <Navbar.Collapse id="basic-Navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Login">Se Connecter</Nav.Link>
              <Nav.Link href="/Register">S'enregistrer </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

//   /* <NavLink to="/">
//         <h1>La bibliothèque de mon village</h1>{" "}
//       </NavLink>

//       <nav className="NavigationBarre_desktop">
//         {isAuthenticated === "true" ? (
//           <ul className="NavigationBarreUl">
//             <NavLink
//               to="/userpage"
//               className={(nav) => (nav.isActive ? "nav-active" : "")}
//             >
//               <li>Espace Personnel </li>
//             </NavLink>
//             <button className="btn-danger" onClick={handleLogout}>
//               Déconnexion
//             </button>
//           </ul>
//         ) : (
//           <ul className="NavigationBarreUl">
//             <NavLink
//               to="/Login"
//               className={(nav) => (nav.isActive ? "nav-active" : "")}
//             >
//               <li>Se Connecter </li>
//             </NavLink>
//             <NavLink
//               to="/Register"
//               className={(nav) => (nav.isActive ? "nav-active" : "")}
//             >
//               <li>S'enregistrer </li>
//             </NavLink>
//           </ul>
//         )}

//         <ul className="NavigationBarreUl">
//           <NavLink
//             to="/aide"
//             className={(nav) => (nav.isActive ? "nav-active" : "")}
//           >
//             <li>Aide </li>
//           </NavLink>
//         </ul>
//       </nav>
//       {!isAuthenticated && (
//         <div className="buttonsBar">
//           <button className="mobile_link" onClick={clickToLogIn}>
//             Se connecter
//           </button>
//           <button className="mobile_link" onClick={clickToRegister}>
//             S'enregistrer
//           </button>
//         </div>
//       )} */
// }
// // </div>

export default NavigationBarre;

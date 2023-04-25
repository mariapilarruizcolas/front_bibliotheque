import React, { useContext } from "react";
//import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import AuthContext from "../contexts/AuthContext";
// import "../styles/test.css";
import { Button, Nav, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function NavBarSide() {
  const navigate = useNavigate();

  const { admin, firstname, userId } = useContext(UserContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(admin, firstname, userId);
  const handleLogout = () => {
    Logout();
    setIsAuthenticated(false);
    navigate("../login", { replace: true });
  };
  return (
    <Card>
      {/* <p>Admin: {admin}</p> */}
      {/* <p>{firstname}</p>
            <p>{userId}</p> */}

      {admin === "non" ? (
        <Nav className="flex-column">
          <Nav.Link href="/CreateBorrowing">Emprunter un livre</Nav.Link>
          <Nav.Link href="/ReturnBook">Rendre un livre</Nav.Link>
          <Nav.Link href="/GetUser">Mes données personnels</Nav.Link>
          <Nav.Link href="/GetMyBorrowings">Mes emprunts</Nav.Link>
          <Button className="btn-danger" onClick={handleLogout}>
            Déconnexion
          </Button>
        </Nav>
      ) : (
        <Nav className="flex-column">
          <Nav.Link href="/CreateBorrowing">Emprunter un livre</Nav.Link>
          <Nav.Link href="/ReturnBook">Rendre un livre</Nav.Link>
          <Nav.Link href="/CreateUser">Créer un nouveau utilisateur</Nav.Link>
          <Nav.Link href=" /DeleteUser">Suprimer un utilisateur</Nav.Link>
          <Nav.Link href="/GetUserById">
            Consulter les données d'un utilisateur
          </Nav.Link>
          <Nav.Link href="/GetBorrowingsByUserId">
            Consulter ses emprunts
          </Nav.Link>
          <Nav.Link href="/CreateBook">Ajouter un nouveau livre</Nav.Link>
          <Nav.Link href="/DeleteBook">Suprimer un livre </Nav.Link>

          <Button className="btn-danger" onClick={handleLogout}>
            Déconnexion
          </Button>
        </Nav>
      )}
    </Card>
  );
}
export default NavBarSide;

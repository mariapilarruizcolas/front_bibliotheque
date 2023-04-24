import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

import "../styles/Nav.css";

function Menu() {
  const navigate = useNavigate();
  const { admin } = useContext(UserContext);
  console.log("administrateur", admin);

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  //showLinks montre le menu. Par default est pas montré donc false
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    //Au click on va montrer seulement si showLinks a changé donc s'il est true
    setShowLinks(!showLinks);
  };
  const handleLogout = () => {
    Logout();
    setIsAuthenticated(false);
    navigate("../login", { replace: true });
  };
  // console.log("Si showLinks est true on montre le menu", showLinks)
  return (
    <div>
      <nav
        className={`NavigationBarre ${showLinks ? "show_nav" : "hide_nav"} `}
      >
        <div className="NavigationBarre_logo">{showLinks}</div>
        <ul className="NavigationBarre_links">
          <li className="NavigationBarre_item slideInDown-1">
            <NavLink to="/CreateBorrowing" className="NavigationBarre_link">
              Emprunter un livre{" "}
            </NavLink>
          </li>
          <li className="NavigationBarre_item slideInDown-2">
            <NavLink to="/ReturnBook" className="NavigationBarre_link">
              Rendre un livre
            </NavLink>
          </li>
          {admin === "yes" ? (
            <ul>
              <li className="NavigationBarre_item slideInDown-3">
                <NavLink className="nav-link" to="/register">
                  Créer un nouveau utilisateur
                </NavLink>
              </li>
              <li className="NavigationBarre_item slideInDown-4">
                <NavLink to="/GetUserById" className="nav-link">
                  <li>Consulter les données d'un utilisateur</li>
                </NavLink>
              </li>

              <li className="NavigationBarre_item slideInDown-5">
                <NavLink to="/DeleteUser" className="nav-link">
                  <li>Suprimer un utilisateur </li>
                </NavLink>
              </li>
              <li className="NavigationBarre_item slideInDown-6">
                <NavLink to="/GetBorrowingsByUserId" className="nav-link">
                  <li>Consulter ses emprunts</li>
                </NavLink>
              </li>
              <li className="NavigationBarre_item slideInDown-6">
                <NavLink to="/CreateBook" className="nav-link">
                  <li>Ajouter un nouveau livre </li>
                </NavLink>
              </li>
              <li className="NavigationBarre_item slideInDown-7">
                <NavLink to="/DeleteBook" className="nav-link">
                  <li>Suprimer un livre </li>
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="NavBarSideUl">
              <div>
                <NavLink
                  to="/GetUser"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <li>Mes données personnels </li>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/GetMyBorrowings"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  <li> Mes emprunts</li>
                </NavLink>
              </div>
            </ul>
          )}

          <li className="NavigationBarre_item slideInDown-7">
            <button className="btn-danger" onClick={handleLogout}>
              Déconnexion
            </button>
          </li>

          <button className="NavigationBarre_burger" onClick={handleShowLinks}>
            <span className="burger_bar"></span>
          </button>
        </ul>
      </nav>
    </div>
  );
}
//     Emprunter un livre
//     Rendre un livre

//     Créer un nouveau utilisateur
//     Consulter les données d'un utilisateur
//     Suprimer un utilisateur
//     Consulter ses emprunts

//     Ajouter un nouveau livre
//     Suprimer un livre

// Bonjour aa

// Bienvenue dans ta page personnel

export default Menu;

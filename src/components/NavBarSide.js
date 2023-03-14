import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import '../styles/test.css';


function NavBarSide() {
    const { admin, firstname, userId } = useContext(UserContext);

    console.log(admin, firstname, userId);
    return (
        <div className="navBarSideContainer">

            {/* <p>Admin: {admin}</p> */}
            {/* <p>{firstname}</p>
            <p>{userId}</p> */}
            <nav>
                <ul className="navBarSideUl">
                    <div><NavLink to="/CreateBorrowing" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li>Emprunter un livre </li></NavLink></div>
                    <div><NavLink to="/ReturnBook" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li> Rendre un livre</li></NavLink></div>
                </ul>
                {/* 
                {(!isAuthenticated && (
                    me="nav-link" to="/login">
                                Se connecter
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">
                                S'enregistrer
                            </NavLink>
                        </li>
                    </>
                )) || (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/account">
                                    Mon compte
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={handleLogout}>Déconnexion</button>
                            </li>
                        </>
                    )} */}

                {(admin === "non" ? (

                    < ul className="navBarSideUl">
                        <div><NavLink to="/GetUser" className={(nav) => nav.isActive ? "nav-active" : ""}>
                            <li>Mes données personnels </li></NavLink></div>
                        <div><NavLink to="/GetMyBorrowings" className={(nav) => nav.isActive ? "nav-active" : ""}>
                            <li> Mes emprunts</li></NavLink></div>
                    </ul>
                )
                    : (
                        <div>
                            <ul className="navBarSideUl">
                                {/* <p>Utilisateurs</p> */}
                                <div><NavLink to="/CreateUser" className={(nav) => nav.isActive ? "nav-active" : ""}>
                                    <li>Créer un nouveau utilisateur </li></NavLink></div>
                                <div><NavLink to="/GetUserById" className={(nav) => nav.isActive ? "nav-active" : ""}>
                                    <li>Consulter les données d'un utilisateur</li></NavLink></div>
                                <div><NavLink to="/DeleteUser" className={(nav) => nav.isActive ? "nav-active" : ""}>
                                    <li>Suprimer un utilisateur </li></NavLink></div>
                                <div><NavLink to="/GetBorrowingsByUserId" className={(nav) => nav.isActive ? "nav-active" : ""}>
                                    <li>Consulter ses emprunts</li></NavLink></div>
                            </ul>
                            <ul className="navBarSideUl">
                                {/* <p>Livres</p> */}
                                <div><NavLink to="/CreateBook" className={(nav) => nav.isActive ? "nav-active" : ""}>
                                    <li>Ajouter un nouveau livre </li></NavLink></div>

                                <div><NavLink to="/DeleteBook" className={(nav) => nav.isActive ? "nav-active" : ""}>
                                    <li>Suprimer un livre </li></NavLink></div>
                            </ul>

                        </div>))}
            </nav>

        </div >
    )

}
export default NavBarSide;
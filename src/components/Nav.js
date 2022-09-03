import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';


import '../styles/Nav.css';

function Nav() {
    //showLinks montre le menu. Par default est pas montré donc false
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        //Au click on va montrer seulement si showLinks a changé donc s'il est true
        setShowLinks(!showLinks)
    }
    console.log("Si showLinks est true on montre le menu", showLinks)
    return (
        <div>
            <nav className={`navbar ${showLinks ? "show_nav" : "hide_nav"} `}>
                <div className="navbar_logo">{showLinks}</div>
                <ul className="navbar_links">
                    <li className="navbar_item slideInDown-1">
                        <NavLink to="/CreateBorrowing" className="navbar_link">
                            Emprunter un livre </NavLink>
                    </li>
                    <li className="navbar_item slideInDown-2">
                        <NavLink to="/ReturnBook" className="navbar_link">
                            Rendre un livre</NavLink>
                    </li>

                    <li className="navbar_item slideInDown-3">
                        <NavLink className="nav-link" to="/register">
                            Créer un nouveau utilisateur
                        </NavLink>
                    </li><li className="navbar_item slideInDown-4">
                        <NavLink to="/GetUserById" className="nav-link">
                            <li>Consulter les données d'un utilisateur</li></NavLink>
                    </li>

                    <li className="navbar_item slideInDown-5">
                        <NavLink to="/DeleteUser" className="nav-link">
                            <li>Suprimer un utilisateur </li></NavLink>
                    </li>
                    <li className="navbar_item slideInDown-6">
                        <NavLink to="/GetBorrowingsByUserId" className="nav-link">
                            <li>Consulter ses emprunts</li></NavLink>
                    </li>
                    <li className="navbar_item slideInDown-6">
                        <NavLink to="/CreateBook" className="nav-link">
                            <li>Ajouter un nouveau livre </li></NavLink>
                    </li>
                    <li className="navbar_item slideInDown-7">
                        <NavLink to="/DeleteBook" className="nav-link">
                            <li>Suprimer un livre </li></NavLink>
                    </li>
                    <button className='navbar_burger' onClick={handleShowLinks}>
                        <span className="burger_bar"></span>
                    </button>
                </ul>

            </nav >
        </div >
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



export default Nav;
import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../contexts/UserContext';

import axios from 'axios';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import NavBarSide from '../components/NavBarSide';
import '../styles/test.css';




// //FAIRE UN BOUTON MODIFIER qui envoie un email
function GetUser() {

    const { userId, firstname } = useContext(UserContext);
    const [data, setData] = useState("");
    console.log(userId);
    useEffect(() => {
        axios

            .get(`http://localhost:8000/api/users/${userId}`)

            .then((res) => setData(res.data));


    }, [])


    return (
        <div className="component2">

            <NavBar />
            <div className="userpage2">
                <div className="navBarSide2">
                    <NavBarSide />
                    <Nav />
                </div>
                <div className="container2">
                    <h2>Bonjour {firstname} </h2>
                    <div className="confirmation2">
                        <h2>Vos données personnels</h2>
                        <p>Prénom: {data.firstname}</p>
                        <p>Nom: {data.lastname}</p>
                        <p>Adresse email: {data.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetUser;

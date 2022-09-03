import React, { useState, useContext } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import NavBarSide from '../components/NavBarSide';
import UserContext from '../contexts/UserContext';
import Nav from '../components/Nav';
import '../styles/test.css';



//TO DO RECUPERER LE email DU CONTEXT
//trouver tous les données de l'user

function GetUserById() {
    const { firstname } = useContext(UserContext);
    const [userId, setUserId] = useState("");
    const [data, setData] = useState("");
    const [error, setError] = useState('');

    const submitGetUserById = e => {

        e.preventDefault();
        axios
            .get(`http://localhost:8000/api/users/${userId}`)
            .then((res) => setData(res.data))
            .catch(err => setError("L'utilisateur n'existe pas"))


        console.log('Data user', data);
    }



    return (
        <div className="component2">
            <NavBar />
            <div className='userpage2'>
                <div className="navBarSide2">
                    <NavBarSide />
                    <Nav />
                </div>
                <div className="container2">
                    <h2>Bonjour {firstname}</h2>
                    <div className="content2">
                        <form className="form-data2" onSubmit={submitGetUserById}>
                            <h2>Consulter les données d'un utilisateur</h2>
                            <input type="text" className="form-control2" placeholder="Entrez le numero d'identification de l'utilisateur"
                                id="userId" onChange={(e) => setUserId(e.target.value)} />
                            <button type="submit">Chercher</button>
                        </form>
                        {error ? <p>{error}</p> : null}
                        {data ? <div className="confirmation2">
                            <h2>Données de l'utilisateur numéro: {data.userId} </h2>
                            <p>Prénom: {data.firstname}</p>
                            <p>Adresse email: {data.email}</p>
                            <p>Droits d'administrateur: {data.admin}</p>
                        </div>
                            : <p>{error}</p>

                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetUserById;

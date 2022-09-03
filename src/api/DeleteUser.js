import React, { useState, useContext } from 'react';

import axios from 'axios';
import UserContext from '../contexts/UserContext';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import NavBarSide from '../components/NavBarSide';
import '../styles/test.css';


//TO DO LISTE 
//VERIFIER SI L'USERID EXISTE ET S'IL A PAS D'EMPRUNTS

//DEMANDER CONFIRMATION AVANT DE SUPRIMER
//lE MESSAGE DOIT S'AFFICHER SEULEMENT SI SUCCES
function DeleteUser() {
    const { firstname } = useContext(UserContext);
    const [data, setData] = useState("");
    const [userId, setUserId] = useState("");
    //const [successful, setSuccessful] = useState('');
    const submitDeleteUser = e => {

        e.preventDefault();
        axios
            .delete(`http://localhost:8000/api/users/${userId}`)

            .then((res) => setData(res.data))

            .catch(err => console.log(err))
        console.log(typeof data)
        return data;


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
                    {console.log('data', data)}
                    <div className='content2'>
                        <form className="form-data2" onSubmit={submitDeleteUser}>
                            <h2>Supprimer un utilisateur</h2>
                            <input type="text" className="form-control2" placeholder="Entrez le numero de l'utilisateur"
                                id="userId" onChange={(e) => setUserId(e.target.value)} />

                            <button type="submit">Suprimer utilisateur</button>
                        </form>

                        {data ? <div className="confirmation2">
                            {/* <h2>🎉 Utilisateur supprimé! </h2> */}
                            <h2>{data}</h2>
                        </div>
                            : null

                        }



                    </div>
                </div>
            </div>
        </div>

    );
}

export default DeleteUser;
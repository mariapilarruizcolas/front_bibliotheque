import React, { useState, useContext } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import NavBarSide from '../components/NavBarSide';
import AuthContext from "../contexts/AuthContext";
import '../styles/test.css';



function Register(credentials) {
    const { isAuthenticated } = useContext(AuthContext);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState('');

    const submitPostUser = e => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/users', {

                firstname,
                lastname,
                email,
                admin,
                password
            })
            .then((res) => setSuccessful(res))

            .catch(err => console.log(err))

    }
    return (


        <div className="component2">
            <NavBar />
            <div className='userpage2'>
                <div className="navBarSide2">
                    {isAuthenticated ? <NavBarSide /> : null}
                </div>
                <div className="container2">
                    {isAuthenticated ? <h2>Créer un nouveau utilisateur</h2> : <h2>S'inscrire</h2>}
                    <div className="content2">
                        <form className="form-data2" onSubmit={submitPostUser}>
                            <input type="text" className="form-control2" placeholder="Prénom"
                                id="firstname" onChange={(e) => setFirstname(e.target.value)} />
                            <input type="text" className="form-control2" placeholder="Nom"
                                id="lastname" onChange={(e) => setLastname(e.target.value)} />
                            <input type="text" className="form-control2" placeholder="Email"
                                id="email" onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" className="form-control2" placeholder="Vous êtes administrateur?"
                                id="admin" onChange={(e) => setAdmin(e.target.value)} />
                            <input type="text" className="form-control2" placeholder="Mot de passe"
                                id="password" onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                    {successful ? <div className="confirmation2">
                        <h2>Inscription reussite 🎉 </h2>
                    </div>
                        : null

                    }
                    {/* <div className="confirmation">
                        <h2>{
                            isAuthenticated ? 'Vous êtes authentifie' : 'Vous êtes pas authentifie'
                        }</h2>
                        <h2>Données recues</h2>
                        <p>firstname:{firstname}</p>
                        <p>lastname:{lastname}</p>

                        <p>admin{admin}</p>
                    </div> */}
                </div>
            </div>
        </div>

    );
}

export default Register;
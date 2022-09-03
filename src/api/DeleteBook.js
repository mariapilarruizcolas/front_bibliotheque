
import React, { useState, useContext } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import NavBarSide from '../components/NavBarSide';

import UserContext from '../contexts/UserContext';
import '../styles/test.css';

//TO DO LISTE 
//DEMANDER CONFIRMATION AVANT DE SUPPRIMER
//lE MESSAGE DOIT S'AFFICHER UNIQUEMENT SI SUCCES
function DeleteBook() {
    const { firstname } = useContext(UserContext);
    const [data, setData] = useState("");
    const [bookId, setBookId] = useState("");
    //const [successful, setSuccessful] = useState('');
    const submitDeleteBook = e => {
        // data = "";
        e.preventDefault();
        axios
            .delete(`http://localhost:8000/api/books/${bookId}`)

            .then((res) => setData(res.data))
        //.then((res) => console.log(res));


        console.log("type de donnees recues: ", typeof data);
        console.log(data);
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
                        <form className="form-data2" onSubmit={submitDeleteBook}>
                            <h2>Supprimer un livre</h2>
                            <input type="text" className="form-control2" placeholder="Entrez le code de barres du livre"
                                id="bookId" onChange={(e) => setBookId(e.target.value)} />

                            <button type="submit">Suprimer livre</button>
                        </form>
                        {data ? <div className="confirmation2">
                            <h2>{data}</h2>
                        </div>
                            : null

                        }



                    </div>
                </div>
            </div>
        </div>



    )
}

export default DeleteBook;
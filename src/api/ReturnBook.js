
import React, { useState, useContext } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import NavBarSide from '../components/NavBarSide';
import UserContext from '../contexts/UserContext';
import '../styles/test.css';
//A verifier s'il check pour de vrai si c'est Free
//Gestion d'erreurs


function ReturnBook() {
    const { firstname } = useContext(UserContext);
    const [showResults, setShowResults] = useState(false);
    const [error, setError] = useState(false);
    const [available, setAvailable] = useState("");
    const [bookId, setBookId] = useState('');
    const [message, setMessage] = useState("");
    const [againFree, setAgainFree] = useState("");

    function thisBookExistsAndIsFree(bookId) {
        axios
            .get(`http://localhost:8000/api/books/${bookId}`)
            .then((res) => setAvailable(res.data.isFree));
        console.log("disponible?", available);
        return available;
    }
    const returnBook = e => {
        setShowResults(!showResults);
        e.preventDefault();
        thisBookExistsAndIsFree(bookId);


        if (available === "yes") { setError(!error); return error }

        // try {


        //     const dataBook = await
        axios
            .delete(`http://localhost:8000/api/borrowing/${bookId}`)

            .then(res => setMessage(res.data))
            .catch(err => console.log(err))
        console.log('Rendered book', message);

        axios
            .put(`http://localhost:8000/api/books/${bookId}`, {
                "isFree": "yes"
            })

            .then(res => setAgainFree(res.data.isFree))
            .catch(err => console.log(err))
        console.log('Livre disponible?', againFree);




        // } catch (error) {
        //     let text = 'error'
        // }
        return againFree;



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
                    {console.log('Rendered book', message)}
                    {console.log("showResults", showResults)}
                    <div className="content2">


                        <form className="form-data2" onSubmit={returnBook}>
                            <h2>Rendre le livre</h2>
                            <input type="text" className="form-control2" placeholder="Entrez le code de barres du livre"
                                id="bookId" onChange={(e) => setBookId(e.target.value)} />

                            <button type="submit">Rendre le livre</button>
                        </form>

                        {showResults ?
                            <div className="confirmation2">
                                <h2>Livre rendu avec succes 🎉</h2>
                                {againFree ? <p>Le livre est desormais disponible</p> : null}
                            </div> :
                            null
                        }



                    </div>
                </div>
            </div>
        </div >
    );
}

export default ReturnBook;
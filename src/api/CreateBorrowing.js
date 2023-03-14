//ça marche aleatoirement
//Refaire isFree en non si l'emprunt est correct
import React, { useState, useContext } from 'react';

import axios from 'axios';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import NavBarSide from '../components/NavBarSide';

import UserContext from '../contexts/UserContext';
import '../styles/test.css';


function CreateBorrowing() {

    const { userId, firstname } = useContext(UserContext);
    const [bookId, setBookId] = useState('');

    const [available, setAvailable] = useState("");
    const [successful, setSuccessful] = useState([]);

    const [deadlineDate, setDeadlineDate] = useState("");
    const [deadlineDateJs, setDeadlineDateJs] = useState("");



    const [isFree, setIsFree] = useState('');

    function thisBookExistsAndIsFree(bookId) {
        axios
            .get(`http://localhost:8000/api/books/${bookId}`)
            .then((res) => setAvailable(res.data.isFree));

        return available;
    }
    function addDaysToDate() {
        const days = 21;
        const res = new Date();
        console.log("aujourd'hui", res)
        res.setDate(res.getDate() + days);
        console.log('date retour complete', res)
        setDeadlineDateJs(res.toLocaleDateString("fr-FR"))
        console.log('date retour en francais', deadlineDateJs);
        return deadlineDateJs;
    }
    function goFromJsToSqlFormat(deadlineDateJs) {
        const newDeadlineDate = deadlineDateJs.split('/');
        setDeadlineDate(newDeadlineDate[2] + "-" + newDeadlineDate[1] + "-" + newDeadlineDate[0]);
        console.log("date sql", deadlineDate)
        return deadlineDate
    }

    function postBorrowing(userId, bookId, deadlineDate) {
        axios
            .post('http://localhost:8000/api/borrowing', {
                userId,
                bookId,
                deadlineDate,

            })
            .then((res) => setSuccessful(res));
        console.log("Reponse", successful)

        return successful;
    }
    function bookNotMoreFree(bookId) {
        axios
            .put(`http://localhost:8000/api/books/${bookId}`, {
                "isFree": "non"
            })
            .then((res) => setIsFree(res.isFree));
        return isFree
    }

    const submitPostBorrowing = async (e) => {
        try {
            e.preventDefault();
            thisBookExistsAndIsFree(bookId);
            addDaysToDate(deadlineDate);
            goFromJsToSqlFormat(deadlineDateJs);
            // if (available === "yes") {
            //     console.log("je suis là")
            // await
            postBorrowing(userId, bookId, deadlineDate);
            bookNotMoreFree(bookId);
            // }
            // console.log('reussi', successful);
        }
        catch (err) {
            console.log(err)
        }
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
                        <form className="form-data2" onSubmit={submitPostBorrowing}>
                            <h2>Emprunter un livre</h2>
                            <input type="text" className="form-control2" placeholder="Entrez le code de barres du livre"
                                id="bookId" onChange={(e) => setBookId(e.target.value)} />

                            <button type="submit">Preter</button>
                        </form>
                        {/* {available === "non" ? <div className="confirmation2"><p>livre pas disponible</p></div> : null} */}
                        {deadlineDateJs ? <div className="confirmation2">
                            <p>{successful.borrowingId}</p>
                            <h2>Livre emprunte 🎉</h2> <p>Prêt realisé</p>
                            <p>Vous devez le rendre au plus tard le {deadlineDateJs}</p>
                        </div> : null}

                    </div>
                </div>
            </div >
        </div>

    );
}

export default CreateBorrowing;
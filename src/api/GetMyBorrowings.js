
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import NavBarSide from '../components/NavBarSide';

import UserContext from '../contexts/UserContext';
import '../styles/test.css';

//import UserContext from '../contexts/UserContext';
function GetMyBorrowings() {
    const { userId, firstname } = useContext(UserContext);
    const [data, setData] = useState("");


    //const [dataBooks, setDataBooks] = useState("");
    //TODO RECUPERER LE useriD DU CONTEXT
    //et refaire la route
    //Corriger aussi le format de la date

    //const userId = 1;
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/borrowing/${userId}`)
            .then((res) => setData(res.data[0]));


    }, []);

    console.log('context ', userId)
    console.log('agargur2', data);

    // function frechDeadLineDate(date) {

    //     const newDeadlineDate = date.split('T');//je le passe en tableau
    //     console.log("date en tableau", newDeadlineDate)
    //     const dateJs = newDeadlineDate[0];
    //     const dateFr = dateJs.split('-');
    //     setNewDate(dateFr[2] + "-" + dateFr[1] + "-" + dateFr[0]);
    //     console.log('date en français', newDate)


    //     return newDate

    // }

    return (

        <div className="component2">

            <NavBar />


            <div className="userpage2">
                {/* <h1>GEt borrowings</h1> */}


                <div className="navBarSide2">
                    <NavBarSide />
                    <Nav />
                </div>
                <div className="container2">
                    <h2>Bonjour {firstname}</h2>
                    <div className="content2">
                        <h2>Vos prêts en cours</h2>
                        {data ?
                            data.map((book) => (
                                <div className="confirmation2" key={book.bookId}>
                                    <p>Titre {book.title}</p>
                                    <p>Auteur {book.author}</p>
                                    {/* {setDateDone(book.deadlineDate)}
                                    {< frechDeadLineDate date={dateDone} />}*/}


                                    <p>Date limite {book.deadlineDate}</p>
                                </div>
                            )) : <p>Pas de prêts en cours</p>}



                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetMyBorrowings;

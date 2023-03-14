
import React, { useState, useContext } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import NavBarSide from '../components/NavBarSide';


import UserContext from '../contexts/UserContext';
import '../styles/test.css';


function GetBorrowingsByUserId() {
    const { firstname } = useContext(UserContext);
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState("");


    //to do
    //Faire la date à la française




    const submitGetBorrowing = e => {

        e.preventDefault();
        axios

            .get(`http://localhost:8000/api/borrowing/${userId}`)
            .then((res) => setData(res.data[0]))
            .catch(err => console.log(err))
        console.log('Data :', data)
        console.log('data.0', data[0])



    }
    // function frechDeadLineDate(dateDone) {

    //     const newDeadlineDate = dateDone.split('T');//je le passe en tableau
    //     console.log("date en tableau", newDeadlineDate)
    //     const dateJs = newDeadlineDate[0];
    //     const dateFr = dateJs.split('-');
    //     setNewDate(dateFr[2] + "-" + dateFr[1] + "-" + dateFr[0]);

    //     return newDate

    // }


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

                        <form className="form-data2" onSubmit={submitGetBorrowing}>
                            <h2>Consulter les prêts d'un utilisateur</h2>
                            <input type="text" className="form-control2" placeholder="Entrez le code de barres de la carte"
                                id="userId" onChange={(e) => setUserId(e.target.value)} />

                            <button type="submit">Chercher</button>
                        </form>





                        {data ?
                            data
                                .map((book) => (

                                    <div className="confirmation2" key={book.bookId}>
                                        {console.log('book', book)}
                                        <p>Titre {book.title}</p>
                                        <p>Auteur {book.author}</p>
                                        {/* {setDateDone(book.deadlineDate)}
                                        {< frechDeadLineDate date={dateDone} />}*/}


                                        <p>Date limite {book.deadlineDate}</p>
                                    </div>
                                ))
                            : <div className="confirmation2">
                                <p>Pas de prêts en cours</p>
                            </div>}





                        <div>
                            {/* {setDateDone(book.deadlineDate)} */}


                            {/* {setNewDate(frechDeadLineDate(dateDone))} */}


                            {/* <p>Date limite {dateDone}</p>
                                </div>
                            ))} */}


                            {/* setDeadlineDate(res.toLocaleDateString("fr-FR")); */}
                            {/* localDate = data.deadlineDate.toLocaleDateString("fr-FR") */}
                            {/* </div>

                            : null

                        } */}

                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default GetBorrowingsByUserId;


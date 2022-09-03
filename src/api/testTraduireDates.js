
import React, { useState } from 'react';

import NavBar from '../components/NavBar';
import NavBarSide from '../components/NavBarSide';
import '../styles/test.css';

function test() {
    const [date, setDate] = useState('');
    function submitTraduire() {
        //const nouvelleDate = "25/08/2022";//façon js à la française
        console.log('date a la francaise', date);//date retour 25/08/2022
        const newDeadlineDate = date.split('/');//je le passe en tableau
        console.log("date en tableau", newDeadlineDate)
        //const withSpaces = withUnderscores.split('_').join(' ');
        //2022 - 09 - 19 deadlineDate sql
        const newDeadlineDateSql = newDeadlineDate[2] + "-" + newDeadlineDate[1] + "-" + newDeadlineDate[0];
        console.log("date en sql", newDeadlineDateSql);

        return newDeadlineDateSql;
    }

    return (

        <div className="form-container">

            <NavBar />


            <div className="userpage">


                <div className="navBarSide">
                    <NavBarSide />
                </div>
                <div className="form-container">

                    {/* <GetBook bookId={BookId} /> */}
                    <h1>Bonjour</h1>
                    <div className="result">
                        <form onSubmit={submitTraduire}>
                            <input type="text" className="form-control" placeholder="Date en sql"
                                id="date" />

                            <button onClick={setDate}>Traduire</button>
                        </form>

                        <div className="confirmation"><p>Date js:{date}</p>
                            <p>Date sql:{newDeadlineDateSql}</p></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default test;
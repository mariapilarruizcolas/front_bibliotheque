import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import NavBarSide from '../components/NavBarSide';

import UserContext from '../contexts/UserContext';
import '../styles/test.css';



function UserPage() {
    const { admin, firstname, userId, email } = useContext(UserContext);
    console.log('userId', userId);
    console.log('firstname', firstname);
    console.log('email', email);
    console.log('admin', admin);
    return (
        <div className="component2">
            <NavBar />
            <div className='userpage2'>
                <div className="navBarSide2">
                    <Nav />
                    <NavBarSide />
                </div>
                <div className="container2">
                    {/* <div className="userPageContents"> */}
                    {/* <h2>Bonjour {firstname} {userId} {admin}</h2> */}
                    <h2>Bonjour {firstname}</h2>

                    <div className="content2">
                        <p>Bienvenue dans ta page personnel</p>
                        {/* <p>Ici vos donnéés personnels </p>
                        <p>ou </p>
                        <p>La liste de livres empruntés </p>
                        <p>Name</p> */}
                    </div>

                </div>
            </div>
        </div>

    );
}

export default UserPage;




import React from 'react';
// import BookCard from './BookCard.js';
import NavBar from './NavBar';
import Test from './Test';
import Form from './Form';

function Home() {
    return (
        <div>
            <NavBar />
            <h1>My booklist 📱</h1>
            <Test />

            <Form />
        </div>
    );
}

export default Home;

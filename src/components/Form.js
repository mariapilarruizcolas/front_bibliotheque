
import axios from 'axios';
import React, { useState } from 'react';

import '../styles/test.css';
import BookCard from './BookCard';


function Form() {
    const [showResults, setShowResults] = useState(false);
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const submitSelectedBooks = (e) => {
        setShowResults(!showResults);
        e.preventDefault();
        if (title.length > 3 || author.length > 3) {

            axios
                .get('http://localhost:8000/api/books/')
                .then((res) => setBooks(res.data[0]));
            console.log('livres ', books);
        }
    }

    return (
        <div className="container2">
            <h2>Rechercher votre livre</h2>
            <form onSubmit={submitSelectedBooks} className='form-data2'>
                <input type="text" className="form-control2" placeholder="Entrez le titre du livre"
                    id="title" onChange={(e) => setTitle(e.target.value)} />

                <input type="text" className="form-control2" placeholder="Entrez l'auteur du livre"
                    id="author" onChange={(e) => setAuthor(e.target.value)} />
                <button className='btn' type='submit'>
                    Rechercher
                </button>
                {console.log(title, author)}
            </form>

            {showResults ?
                <div className="confirmation2">
                    <h2>Votre selection</h2>
                    {books
                        .filter(
                            (book) =>
                                book.author.toLowerCase().includes(author.toLowerCase()) && book.title.toLowerCase().includes(title.toLowerCase())
                        )
                        .slice(0, 3)
                        .map((book, index) => (

                            <BookCard
                                key={book.index}
                                title={book.title}
                                author={book.author}
                                isFree={book.isFree}
                            />
                        ))}
                </div > : null}
        </div>
    )
}
export default Form;

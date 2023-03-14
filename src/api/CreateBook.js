import React, { useState, useContext } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import NavBarSide from '../components/NavBarSide';
import UserContext from '../contexts/UserContext';
import '../styles/test.css';

function CreateBook() {
    const { firstname } = useContext(UserContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [successful, setSuccessful] = useState("");

    const isFree = 'yes';

    const submitPostBook = e => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/books', {
                title,
                author,
                isFree,
            })
            .then((res) => setSuccessful(res.data))
            .catch(err => console.log(err))
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
                        <form className="form-data2" onSubmit={submitPostBook}>
                            <h2>Créer un nouveau livre</h2>
                            <input type="text" className="form-control2" placeholder="Entrez le titre du livre"
                                id="title" onChange={(e) => setTitle(e.target.value)} />

                            <input type="text" className="form-control2" placeholder="Entrez l'auteur du livre"
                                id="author" onChange={(e) => setAuthor(e.target.value)} />
                            <button type="submit">Envoyer</button>
                        </form>
                        {successful ? <div className="confirmation2">
                            <h2>Nouveau livre ajoute 🎉 </h2>
                            <p>Titre: {title}</p>
                            <p>Author: {author}</p>
                            <p>Livre numéro: {successful.bookId}</p>
                        </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBook;
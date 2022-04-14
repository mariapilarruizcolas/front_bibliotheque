//objectif: recuperer les criteres autant que props de form.js 
//pour faire l'appel axios vers le back
//et finalment trier selon les criteres
//et passer les données à BookCard en props 
//pour qu'il les affiche autant que carte


import React from 'react';
import BookCard from './BookCard.js';


import axios from 'axios';
import { useState, useEffect } from 'react';


function Books() {
    //unique façon de changer la variable book est passer par setNewBook
    const [data, setData] = useState([])
    //pour presenter joliement quand il y a beaucoup des cartes
    const [rangeValue, setRangeValue] = useState([12]);
    //pour trier selon la radio selectionee
    const [selectedRadio, setSelectedRadio] = useState("");

    //le useEffect fait executer ce code uniquement au montage du composent
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/books/')
            .then((res) => setData(res.data));

    }, []);
    const radios = ['Lucy Maud Montgomery', 'Michael Ende'];
    return (
        <div>
            <h1>Books</h1>
            <ul className="radio-container">
                {/* // a chaque changement de la barre on changera combien des cartes affiches */}
                <input type="range" min="1" max="250" defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)} />
                {radios.map((critere) => (
                    <li> <input type="radio" id={critere} name="critereRadio" checked={critere === selectedRadio} onChange={((e) => setSelectedRadio(e.target.id))} />
                        <label htmlFor={critere}>{critere}</label> </li>
                ))}
            </ul>
            {/* //Si selectedRadio est selectionne donc true affiche-moi le button pour montrer tous le pays
            On montre tous les pays quand setSelectedRadio est vide donc pas selectionné */}
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>
            )}
            <ul className="container">

                {
                    //On map le resultat avec tous les livres et on fait une carte pour chacun
                    data

                        .filter((selectedBook) => selectedBook.author.includes(selectedRadio))
                        //a - b ordre croissant a.id parce que c'est un objet 
                        //Il va trier par ordre croissante d'id
                        .sort((a, b) => a.id - b.id)
                        .slice(0, rangeValue)
                        .map((book, index) =>
                            <BookCard
                                //ici key est l'info qui va être recupere par BookCard
                                key={book.index}
                                author={book.author}
                                title={book.title}
                                isFree={book.is_Free} />
                            //<li key={index}>{book.title}</li>
                        )
                }
            </ul>
        </div>
    );
}


export default Books;

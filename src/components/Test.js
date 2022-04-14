import React from 'react';
//import BookCard from './BookCard.js';


import axios from 'axios';
import { useState, useEffect } from 'react';


function Test() {
    //unique façon de changer la variable book est passer par setNewBook
    const [data, setData] = useState([])
    //pour presenter joliement quand il y a beaucoup des cartes
    //const [rangeValue, setRangeValue] = useState([12]);
    //pour trier selon la radio selectionee
    //const [selectedRadio, setSelectedRadio] = useState("");

    //le useEffect fait executer ce code uniquement au montage du composent
    useEffect(() => {
        axios
            .get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
            .then((res) => setData(res.data));

    }, []);
    console.log(data)
    // const radios = ['Lucy Maud Montgomery', 'Michael Ende'];
    return (
        <div>
            <h1>Books</h1>
            <ul className="container">

                {/* {
                    //On map le resultat avec tous les livres et on fait une carte pour chacun
                    data
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
                } */}
            </ul>
        </div>
    );
}


export default Test;


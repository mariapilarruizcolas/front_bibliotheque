//objectif: recuperer les criteres 
//et les passer autant que props vers Books 
//qui fera l'appel et le tri de la basse de données

import './Form.css';

function Form() {
    //State Premier Critere
    //State Second Critere
    return (
        <div className ="container">
            <div className="containerForm">
                <h1>Recherche</h1>
                
                <div className="criteres">
                    <select id="critere1" name="critere1">
                        <option value="titre">Titre</option>
                        <option value="auteur">Auteur</option>
                    </select>
                    <input class="form" type="text" id="search1" name="search1" placeholder="Recherche dans le catalogue" />
                    {/* //onChange={((e) => setSelectedRadio(e.target.id)) */}
                </div>
                <div className="criteres">
                    <select id="arguments" name="arguments">
                        <option value="Et">Et</option>
                        <option value="Ou">Ou</option>
                        <option value="Sauf">Sauf</option>
                    </select>
                    <input class="form" type="text" id="search2" name="search2" placeholder="Recherche dans le catalogue" />
                     {/* //onChange={((e) => setSelectedRadio(e.target.id)) */}
                </div>
                <div className="criteres">
                    <button>
                        <a class="button" href="bien_recu.html">Rechercher</a>
                     {/* //onClick={((e) => setSelectedRadio(e.target.id)) recherche par critere*/}

                    </button>
                    <button>
                        <a class="button" href="bien_recu.html">Reinitialiser</a>
                     {/* //onClick={((e) => setSelectedRadio(e.target.id)) reinitialiser*/}    

                    </button>
                </div>
            </div>
        </div>
//on recupere le contenue de l'input et on le passe comme props a Books pour qu'il fasse sa recherche et le tri 
                            // <BookCard
                            //     //ici key est l'info qui va être recupere par BookCard
                            //     key={book.index}
                            //     author={book.author}
                            //     title={book.title}
                            //     isFree={book.is_Free} />
                            // //<li key={index}>{book.title}</li>


    )
}
export default Form;


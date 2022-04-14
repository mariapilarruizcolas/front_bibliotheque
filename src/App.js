import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import Search from './components/Search';
import Help from './components/Help.js';
import EspaceClient from './components/EspaceClient';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={< Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/help" element={<Help />} />
        <Route path="/EspaceClient" element={<EspaceClient />} />
        {/* // pour les autres textes pas declarés */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    // const [book, setNewBook] = useState([]);
    // //useEffect(() => {
    // const getNewbook = () => {
    //   axios
    //     .get('http://localhost:8000/api/books/')
    //     .then((response) => response.data)
    //     .then((data) => {
    //       setNewBook(data[0])
    //       //   const allBooks= res.data;
    //       //   setNewBook({ allBooks }) 
    //       // console.log(allBooks)
    //     })
    // }
    // // },[]); 
    // return (

    //   <div>
    //     <NavBar />
    //     <h1>My booklist 📱</h1>
    //     <div id="container">
    //       {/* //{allBooks.map((book, index) => ( */}
    //       <BookCard
    //         key={book.id}
    //         title={book.title}
    //         author={book.author}
    //         isFree={book.is_free}
    //       />
    //       <button onClick={getNewbook}>
    //         My favorite book</button>
    //       {/* ))} */}
    //     </div>
    //   </div>
  );
}





export default App;

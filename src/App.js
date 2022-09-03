import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserPage from './pages/UserPage';
import Aide from './pages/Aide';

import AuthContext from './contexts/AuthContext'
import UserContext from './contexts/UserContext'

import ReturnBook from './api/ReturnBook';
import CreateBorrowing from './api/CreateBorrowing';
import GetBorrowingsByUserId from './api/GetBorrowingsByUserId';
import GetUser from './api/GetUser';
import DeleteUser from './api/DeleteUser';
import GetUserById from './api/GetUserById';
import CreateBook from './api/CreateBook';
import CreateUser from './api/CreateUser';
//import SearchBookByBookId from './api/SearchBookByBookId';
import DeleteBook from './api/DeleteBook';
import GetMyBorrowings from './api/GetMyBorrowings';
// import Test2 from './components/Test2';



//import ThisBookIsFree from './components/ThisBookIsFree';
// import Test from './components/Test';


//import UserContext from './contexts/UserContext';

import Authenticate from './services/Authenticate';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(Authenticate.isAuthenticated);
  const { admin, firstname, userId, email } = useContext(UserContext);
  //const [userData, setUserData] = useState(Authenticate);
  return (



    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }} >
      <UserContext.Provider value={{ admin, firstname, userId, email }} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/thisbookisfree" element={<ThisBookIsFree />} /> */}
            {/* <PrivateRoute path="/proPage" element={<ProPage />} /> */}
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/login/userpage" element={<UserPage />} />
            <Route path="/returnBook" element={<ReturnBook />} />
            <Route path="/createBorrowing" element={<CreateBorrowing />} />
            <Route path="/aide" element={<Aide />} />
            <Route path="/getUser" element={<GetUser />} />
            <Route path="/getUserById" element={<GetUserById />} />
            <Route path="/deleteUser" element={<DeleteUser />} />
            <Route path="/getBorrowingsByUserId" element={<GetBorrowingsByUserId />} />
            <Route path="/createBook" element={<CreateBook />} />
            <Route path="/createUser" element={<CreateUser />} />
            {/* <Route path="/searchBookByBookId" element={<SearchBookByBookId />} /> */}
            <Route path="/deleteBook" element={<DeleteBook />} />
            <Route path="/getMyBorrowings" element={<GetMyBorrowings />} />
            {/* //<Route path="/account" element={<Account />} /> */}

            {/* <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<Test2 />} /> */}







          </Routes>
        </BrowserRouter>
      </ UserContext.Provider >
    </ AuthContext.Provider >



  )
}
export default App;


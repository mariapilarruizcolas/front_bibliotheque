
import React, { useContext } from 'react';
//import { Route } from 'react-router-dom';
//import Login from '../pages/Login';
import AuthContext from "../contexts/AuthContext";
const AuthenticatedRoute = () => {
    //const AuthenticatedRoute = ({ path, component }) => {

    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? (
        <p>Authentification reussie</p>
        //<Route exact path={path} component={component} />
    ) : (
        <p>Authentification refusée</p>
        //<Route path="/login" component={<Login />} />
    )
}
export default AuthenticatedRoute;
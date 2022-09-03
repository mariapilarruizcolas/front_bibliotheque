import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import AuthContext from "../contexts/AuthContext";
import '../styles/NavBar.css';
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const navigate = useNavigate();


    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const clickToLogIn = e => {

        e.preventDefault();
        navigate('./login', { replace: true });
    }
    const clickToRegister = e => {

        e.preventDefault();
        navigate('./register', { replace: true });
    }

    const handleLogout = () => {

        Logout();
        setIsAuthenticated(false);
        navigate('../login', { replace: true });
    }
    // const [showLinks, setShowLinks] = useState(false);
    // const handleShowLinks = () => {
    //     //Au click on va montrer seulement si showLinks a changé donc s'il est true
    //     setShowLinks(!showLinks)
    // }

    return (
        <div className="containerNavBar2">
            <NavLink to="/">
                <h1>La bibliothèque des rêves bleus</h1> </NavLink>


            <nav className="navbar_desktop">


                {(!isAuthenticated && (
                    <ul className='navBarUl'>

                        <NavLink to="/Login" className={(nav) => nav.isActive ? "nav-active" : ""}>
                            <li>Se Connecter </li></NavLink>
                        <NavLink to="/Register" className={(nav) => nav.isActive ? "nav-active" : ""}>
                            <li>S'enregistrer </li></NavLink>
                    </ul>
                )
                ) || (
                        <ul className='navBarUl'>

                            <NavLink to="/userpage" className={(nav) => nav.isActive ? "nav-active" : ""}>
                                <li>Espace Personnel </li></NavLink>
                            <button className="btn-danger" onClick={handleLogout}>Déconnexion</button>
                        </ul>
                    )}

                <ul className='navBarUl'>


                    <NavLink to="/aide" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li>Aide </li></NavLink>
                </ul>
            </nav>
            {(!isAuthenticated && (
                <div className="buttonsBar">
                    <button className="mobile_link" onClick={clickToLogIn}>Se connecter</button>
                    <button className="mobile_link" onClick={clickToRegister}>S'enregistrer</button>
                </div>))}

        </div>
    )
}

export default NavBar;
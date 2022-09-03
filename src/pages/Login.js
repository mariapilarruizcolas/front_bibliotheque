import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Authenticate from '../services/Authenticate';
import '../components/Form.css';
import openEye from '../icons/openEye.svg';
import closedEye from '../icons/closedEye.svg';

import AuthContext from '../contexts/AuthContext';

import '../styles/test.css';




function Login() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        //ici on met les name
        email: "",
        password: ""
    });

    const { setIsAuthenticated } = useContext(AuthContext);
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    //currentTarget est le contenu de l'input actuel
    const HandleChange = ({ currentTarget }) => {
        //Tu fais des pairs de valeurs name - value ex: userName - aa
        const { name, value } = currentTarget;
        //Comme les name sont differents il va mettre pour chaque name sa value
        setCredentials({
            //on ajoute les deux valeurs de name name==userName et name==password
            //sinon quand tu met la value de password la value de userName disparait
            ...credentials,
            [name]: value
        })
        //console.log(value, name)
    }
    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     await submitForm(event.target);
    //     navigate("../success", { replace: true });
    // }
    const HandleSubmit = async (event) => {
        // let navigate = useNavigate();
        //console.log("clicke")
        event.preventDefault();
        try {
            await Authenticate.Authenticate(credentials)
            setIsAuthenticated(true)

            console.log('identifie ', setIsAuthenticated)
            navigate('./userpage', { replace: true });
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="component2">
            <NavBar />
            <div className="container2">
                <h2>Veuillez-vous connecter</h2>
                <form onSubmit={HandleSubmit} className='form-data2'>
                    <input type="text" className="form-control2" placeholder="Identifiant"
                        id="email" name="email" onChange={HandleChange} />
                    {/* //quand on change quelque chose de l'input ça va mettre
                    //la valeur de ce qui est ecrit dedans l'input (target.value)
                    // à l'interieur de title ou author en changeant son State */}
                    <input type={passwordIsVisible ? 'test' : 'password'} className="form-control2" placeholder="Mot de passe "
                        id="password" name="password" onChange={HandleChange} />
                    <button className='btn' type='submit'>
                        Se conecter
                    </button>
                    <span onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
                        <img src={passwordIsVisible ? openEye : closedEye} alt={passwordIsVisible ? 'openEye icon' : 'closedEye icon'} width="32" />
                    </span>
                </form>
            </div>

        </div>

    )

}
export default Login;

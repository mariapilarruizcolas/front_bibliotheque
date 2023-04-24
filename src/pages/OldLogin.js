import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBarre from "../components/NavigationBarre";
import Authenticate from "../services/Authenticate";
import "../components/Form.css";
import openEye from "../icons/openEye.svg";
import closedEye from "../icons/closedEye.svg";

import AuthContext from "../contexts/AuthContext";

import "../styles/test.css";

function Login() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  //const [success, setSuccess] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState("");
  const [credentials, setCredentials] = useState({
    //ici on met les name
    email: "",
    password: "",
  });

  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  //currentTarget est le contenu de l'input actuel
  const HandleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (name === "email" && value === "") {
      setMessage("");
    } else if (name === "password" && value === "") {
      setMessage("");
    }
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await Authenticate.Authenticate(credentials, setSuccess, setMessage);

      // console.log("sucess", success);
      // if (success) {
      //   setIsAuthenticated(true);
      //   navigate("./userpage", { replace: true });
      //   return;
      // }
    } catch (err) {
      console.log(err);
      setMessage("Invalid credentials");
    } finally {
      setIsLoading(false); //mettre isLoading à false une fois que l'authentification est terminée
    }
  };
  useEffect(() => {
    if (success) {
      setIsAuthenticated(true);
      navigate("./userpage", { replace: true });
    }
  }, [success, navigate, setIsAuthenticated]);

  //       setMessage("Invalid credentials");
  //     }
  //   } catch (err) {
  //     setMessage(err.message);
  //     console.log(err);
  //   }
  // };

  // const HandleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const authResult = await Authenticate.Authenticate(
  //       credentials,
  //       setSuccess
  //     );

  //     if (authResult.success) {
  //       console.log("isAuthenticated: ", isAuthenticated);

  //       navigate("./userpage", { replace: true });
  //       return;
  //     } else {
  //       setMessage("invalid credentials");
  //     }
  //   } catch (err) {
  //     setMessage(err.message);
  //     console.log(err);
  //   }
  // };

  return (
    <div className="component2">
      <NavigationBarre />
      <div className="container2">
        <h2>Veuillez-vous connecter</h2>
        <form onSubmit={HandleSubmit} className="form-data2">
          <input
            type="text"
            className="form-control2"
            placeholder="Identifiant"
            id="email"
            name="email"
            onChange={HandleChange}
          />
          {/* //quand on change quelque chose de l'input ça va mettre
                    //la valeur de ce qui est ecrit dedans l'input (target.value)
                    // à l'interieur de title ou author en changeant son State */}
          <input
            type={passwordIsVisible ? "test" : "password"}
            className="form-control2"
            placeholder="Mot de passe "
            id="password"
            name="password"
            onChange={HandleChange}
          />
          <button className="btn" type="submit">
            Se connecter
          </button>
          <span onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
            <img
              src={passwordIsVisible ? openEye : closedEye}
              alt={passwordIsVisible ? "openEye icon" : "closedEye icon"}
              width="32"
            />
          </span>
        </form>
        {isLoading ? (
          <div className="loading">
            <p>Chargement en cours...</p>
          </div>
        ) : (
          message && (
            <div className="confirmation2">
              <p>{message}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Login;

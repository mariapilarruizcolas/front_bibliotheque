
import { createContext } from "react";


const AuthContext = createContext(

    {
        isAuthenticated: false,
        setIsAuthenticated: (value) => { }
    }

);

export default AuthContext;


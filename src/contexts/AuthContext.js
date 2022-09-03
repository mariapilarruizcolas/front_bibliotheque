
import { createContext } from "react";


const AuthContext = createContext(

    {
        isAuthenticated: false,
        setIsAuthenticated: (value) => { }
    }

);
// import { createContext } from "react";

// const AuthContext = createContext(
//     {
//         isAuthenticated: false,
//         setIsAuthenticated: (value) => { }
//     }
// );

// export default AuthContext;


//import { createContext, useContext, useMemo } from "react";
//import { useNavigate } from "react-router-dom";
//import UseLocalStorage from './UseLocalStorage';

// const AuthProvider = ({ children }) => {

//     const [user, setUser] = UseLocalStorage("user", null);
//     const navigate = useNavigate();

//     // call this function when you want to authenticate the user
//     const login = async (data) => {
//         setUser(data);
//         navigate("/connecte");
//     };

//     // call this function to sign out logged in user
//     const logout = () => {
//         setUser(null);
//         navigate("/", { replace: true });
//     };

//     const value = useMemo(
//         () => ({
//             user,
//             login,
//             logout
//         }),
//         [user]
//     );
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// const useAuth = () => {
//     return

//     const { isAuthenticated, setIsAuthenticated } = useContext(MovieContext);
// };
export default AuthContext;


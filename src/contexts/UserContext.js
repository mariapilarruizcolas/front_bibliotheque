
import { createContext } from "react";


const UserContext = createContext(
    {
        admin: window.localStorage.getItem("admin"),
        firstname: window.localStorage.getItem("username"),
        userId: window.localStorage.getItem("userId"),
        email: window.localStorage.getItem("email")

    }
);
export default UserContext;
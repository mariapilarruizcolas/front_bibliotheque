
import axios from 'axios';
// https://www.youtube.com/watch?v=A__Mo3TyBKU minute 3 comment enlever les token...
import jwtDecode from 'jwt-decode';
import { getItem, removeItem } from './LocalStorage'

//login
function Authenticate(credentials) {
    return (axios
        .post('http://localhost:8000/api/auth/login', credentials)
        .then((res) => (res.data))


        .then(data => {
            window.localStorage.setItem("AuthToken", data.token)
            window.localStorage.setItem("username", data.user.firstname)
            window.localStorage.setItem("admin", data.user.admin)
            window.localStorage.setItem("userId", data.user.userId)
            window.localStorage.setItem("email", data.user.email)
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

            console.log('Data', data.user.userId);

        }))
}
function hasAuthenticated() {
    const token = getItem('AuthToken');
    const result = token ? TokenIsValid(token) : false;

    if (false === result) {
        removeItem('AuthToken');
    }

    return result;
}


// export function login(credentials) {
//     return axios
//         .post('http://miniblog.local:8888/api/login_check', credentials)
//         .then(response => response.data.token)
//         .then(token => {
//             addItem('miniblogToken', token);

//             return true;
//         });
// }



function TokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;
}






export default {
    Authenticate,
    hasAuthenticated
}



import { removeItem } from '../services/LocalStorage';

function Logout() {

    removeItem('AuthToken');
    removeItem('username');
    removeItem('admin');
    removeItem('userId');
    removeItem('email');


}

export default Logout;
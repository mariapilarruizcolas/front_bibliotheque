import React from 'react';
import { removeItem } from './LocalStorage'
function Logout() {
    removeItem('AuthToken');
}
export default Logout;

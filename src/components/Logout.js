import React from 'react';
import {
    Redirect

} from 'react-router-dom'

const Logout = () => {
    localStorage.clear();
    /*  from here after login it will clean localstorage
    and it will redirect to login page */
    return < Redirect to ="/login" />
};

export default Logout;
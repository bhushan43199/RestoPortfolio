import React from 'react';
import {Redirect, Route} from 'react-router-dom'


//Created Protected route before login


const Protected = ({component:Cmp,...rest}) => (
    
    <Route
        {...rest}
        render={(props)=>
            localStorage.getItem('login')?
            (
                <Cmp {...props} />

            ):
            /* If user not logged in then it will redirect to login */
            <Redirect to="/login" />

        }
    />
)

export default Protected;
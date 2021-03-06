import React from 'react';
import {Redirect,Route} from 'react-router-dom';

const ProtectedRoute = ({component:Component,...rest}) => {

    return (
        <Route 
        {...rest}
        render={props => localStorage.getItem('supabase.auth.token') ? <Component {...props} />  : <Redirect to="/" />}
        />
    )

}

export default ProtectedRoute;
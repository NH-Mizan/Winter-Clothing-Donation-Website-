import React, { Children, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loder from '../Allpage/Loder';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const { user, loder } = useContext(AuthContext)
    if(loder){
        return <Loder></Loder>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;
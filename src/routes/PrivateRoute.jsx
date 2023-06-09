import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="flex h-48 justify-center items-center"><button className="btn loading">loading</button></div>
    }
    if (user) {
        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} />
    );
};

export default PrivateRoute;
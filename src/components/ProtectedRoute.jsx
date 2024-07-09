// import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

function ProtectedRoute({ component: Component }) {
    const user = getCurrentUser();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return <Component />;
}

ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;

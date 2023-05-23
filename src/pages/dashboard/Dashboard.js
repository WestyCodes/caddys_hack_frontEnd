import React from 'react';
import jwt_decode from 'jwt-decode';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { token } = useAuth();
    const { userId } = jwt_decode(token);

    const handleLogout = () => {
        // research.
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default Dashboard;

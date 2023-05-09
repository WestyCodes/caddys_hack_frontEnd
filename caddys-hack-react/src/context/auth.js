import { createContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
// import Header from '../components/header';
// import Modal from '../components/modal';
// import Navigation from '../components/navigation';
import useAuth from '../hooks/useAuth';
import { createProfile, get, login, register } from '../service/apiClient';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [token, setToken] = useState(null);
    const [loggedInUserInfo, setLoggedInUserInfo] = useState({});

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken && !token) {
            setToken(storedToken);
            try {
                const { userId } = jwt_decode(storedToken);
                const getUserInfo = async () => {
                    const res = await get(`users/${userId}`);
                    setLoggedInUserInfo(res.data.user);
                    if (!res.data.user.firstName || !res.data.user.lastName) {
                        navigate('/welcome');
                    } else {
                        navigate(location.pathname || '/');
                    }
                };
                getUserInfo();
            } catch (e) {
                console.log(e.message);
            }
        }
    }, [location.pathname]);

    const handleLogin = async (email, password) => {
        const res = await login(email, password);
        if (!res.data.token) {
            return res;
        }

        localStorage.setItem('token', res.data.token);
        setToken(res.data.token);
        setLoggedInUserInfo(res.data.user);
        navigate('/');
        return res;
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    const handleRegister = async (email, password) => {
        const res = await register(email, password);
        const status = res.status;

        if (status === 'fail') {
            return status;
        } else if (status === 'success') {
            const res = await login(email, password);
            setToken(res.data.token);
            navigate('/verification');
            return status;
        }
    };

    const handleCreateProfile = async (firstName, lastName, githubUrl, bio) => {
        const { userId } = jwt_decode(token);
        localStorage.setItem('token', token);

        await createProfile(userId, firstName, lastName, githubUrl, bio);

        navigate('/');
    };

    const value = {
        token,
        loggedInUserInfo,
        onLogin: handleLogin,
        onLogout: handleLogout,
        onRegister: handleRegister,
        onCreateProfile: handleCreateProfile,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
        return <Navigate to={'/login'} replace state={{ from: location }} />;
    }

    return (
        <div className="container">
            {/* <Header />
            <Navigation />
            <Modal /> */}
            {children}
        </div>
    );
};

export { AuthContext, AuthProvider, ProtectedRoute };

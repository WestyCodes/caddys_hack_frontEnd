import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage.js';
import LoginPage from './pages/login/LoginPage';
import Dashboard from './pages/dashboard/Dashboard';
import { AuthProvider, ProtectedRoute } from './context/auth';
import { ModalProvider } from './context/modal';

function App() {
    return (
        <AuthProvider>
            <ModalProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </ModalProvider>
        </AuthProvider>
    );
}

export default App;

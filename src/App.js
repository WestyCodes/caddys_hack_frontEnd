import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from './context/auth';
import { ModalProvider } from './context/modal';
import HomePage from './pages/home/HomePage.js';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage.js';
import Dashboard from './pages/dashboard/Dashboard';
import DataVis from './pages/dataVis/DataVisuals.js';
import CaddyTrack from './pages/caddyTrack/CaddyTrack.js';

function App() {
    return (
        <AuthProvider>
            <ModalProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/caddytrack"
                        element={
                            <ProtectedRoute>
                                <CaddyTrack />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/datavis"
                        element={
                            <ProtectedRoute>
                                <DataVis />
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

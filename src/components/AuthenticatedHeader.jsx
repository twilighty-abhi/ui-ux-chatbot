import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signOutUser } from '../services/authService';

const AuthenticatedHeader = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOutUser();
            navigate('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <header className="App-header">
            <div className="header-content">
                <div className="user-info">
                    Welcome, {currentUser?.email || 'User'}!
                </div>
                <div className="header-center">
                    <h1>Blinky</h1>
                    <p>Let Blinky blink for better design!</p>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </header>
    );
};

export default AuthenticatedHeader; 
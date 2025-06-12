import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../styles/LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Clear previous errors
        setError('');

        // Validate form
        if (!email.trim()) {
            setError('Please enter your email');
            return;
        }
        if (!password.trim()) {
            setError('Please enter your password');
            return;
        }
        if (!email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }

        // Mock authentication - redirect to home page after login
        navigate('/home');
    };

    const handleGoogleLogin = () => {
        // For now, show an alert since Google OAuth requires setup
        alert('Google login feature coming soon! Please use email/password for now.');
        
        // In a real app, you would integrate with Google OAuth here:
        // window.location.href = 'https://accounts.google.com/oauth/authorize?...';
    };

    return (
        <div className="login-page-container">
            <div className="login-page">
                <div className="login-container">
                    <h2>Welcome Back!</h2>
                    <p>Please log in to continue</p>
                    {error && <p className="error-message">{error}</p>}
                    <div className="login-form">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn-login" onClick={handleLogin}>Login</button>
                        <p className="forgot-password"><Link to="#">Forgot Password?</Link></p>
                    </div>
                    <div className="divider">
                        <span>OR</span>
                    </div>
                    <div className="social-login">
                        <button className="btn-google" onClick={handleGoogleLogin}>
                            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage; 
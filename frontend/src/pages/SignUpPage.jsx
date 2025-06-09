import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../styles/SignUpPage.css';

const SignUpPage = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        // Mock authentication
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Create Account</h2>
                <p>Get started with your new account</p>
                <div className="signup-form">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button className="btn-signup" onClick={handleSignUp}>Sign Up</button>
                </div>
                <div className="divider">
                    <span>OR</span>
                </div>
                <div className="social-signup">
                    <button className="btn-google" onClick={handleSignUp}>
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
                        Sign Up with Google
                    </button>
                </div>
                <p className="login-link">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage; 
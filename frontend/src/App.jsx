import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'; // Assuming you have this
import ProtectedRoute from './components/ProtectedRoute';
import GoogleAuthHandler from './components/GoogleAuthHandler';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <GoogleAuthHandler />
                <div className="App">
                    <Routes>
                        {/* Auth pages */}
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />

                        {/* Protected Main App Page */}
                        <Route path="/home" element={
                            <ProtectedRoute>
                                <>
                                    <header className="App-header">
                                        <Link to="/login" className="signup-link-corner">Sign In</Link>
                                        <h1>Blinky</h1>
                                        <p>Let Blinky blink for better design!</p>
                                    </header>
                                    <HomePage />
                                </>
                            </ProtectedRoute>
                        } />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App; 
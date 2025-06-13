import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'; // Assuming you have this
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Auth pages */}
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />

                    {/* Main App Page */}
                    <Route path="/home" element={
                        <>
                            <header className="App-header">
                                <Link to="/login" className="signup-link-corner">Sign In</Link>
                                <h1>Blinky</h1>
                                <p>Let Blinky blink for better design!</p>
                            </header>
                            <HomePage />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 
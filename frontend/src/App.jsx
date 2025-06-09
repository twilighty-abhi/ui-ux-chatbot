import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './App.css';
import backgroundImage from './assets/background.jpg';
import { Link } from 'react-router-dom';

function App() {
    const [file, setFile] = useState(null);
    const [analysis, setAnalysis] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setAnalysis('');
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setError('Please upload a file first.');
            return;
        }

        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const apiUrl = import.meta.env.PROD ? '/api/analyze' : 'http://localhost:5000/analyze';
            const res = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setAnalysis(res.data.analysis);
        } catch (err) {
            setError('An error occurred during analysis. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <header className="App-header">
                <Link to="/" className="signup-link-corner">Sign Up</Link>
                <h1>Blinky</h1>
                <p>Upload your UI design to get an expert analysis.</p>
            </header>
            <main>
                <form onSubmit={handleSubmit} className="upload-form">
                    <div className="file-input-wrapper">
                        <input type="file" id="file" onChange={handleFileChange} />
                        <label htmlFor="file" className="file-input-label">
                            {file ? file.name : 'Choose a file'}
                        </label>
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Analyzing...' : 'Analyze Design'}
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {analysis && (
                    <div className="analysis-result">
                        <h2>Analysis Result</h2>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{analysis}</ReactMarkdown>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App; 
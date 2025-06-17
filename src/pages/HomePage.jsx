import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function HomePage() {
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
            const res = await axios.post('/api/analyze', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setAnalysis(res.data.analysis);
        } catch (err) {
            const errorMessage = err.response?.data?.error || 'An error occurred during analysis. Please try again.';
            setError(errorMessage);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <form onSubmit={handleSubmit} className="upload-form">
                <p className="choose-file-text">Choose your File</p>
                <div className="file-input-wrapper">
                    <input type="file" id="file" onChange={handleFileChange} />
                    <label htmlFor="file" className="file-input-label">
                        {file ? file.name : (
                            <div className="upload-icon-container">
                                <svg className="upload-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#000"/>
                                    <path d="M14 2V8H20" fill="#fff"/>
                                    <path d="M12 11L12 17" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M9 14L12 11L15 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        )}
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
    );
}

export default HomePage; 
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PricingPage.css';

const PricingPage = () => {
    return (
        <div className="pricing-page">
            <div className="pricing-container">
                <header className="pricing-header">
                    <h1>Choose Your Plan</h1>
                    <p>Select the perfect plan for your design analysis needs</p>
                </header>

                <div className="pricing-cards">
                    {/* Free Plan */}
                    <div className="pricing-card">
                        <div className="card-header">
                            <h2>Free</h2>
                            <p className="card-description">
                                For individuals or very small teams just getting started with Blinky
                            </p>
                        </div>
                        
                        <div className="price-section">
                            <div className="price">Free</div>
                        </div>

                        <button className="pricing-btn free-btn">
                            <Link to="/signup">Try for free</Link>
                        </button>

                        <div className="features">
                            <ul>
                                <li>✓ Basic UI/UX analysis</li>
                                <li>✓ Free 5 analysis</li>
                                <li>✓ Standard feedback</li>
                            </ul>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="pricing-card popular">
                        <div className="popular-badge">Most popular</div>
                        <div className="card-header">
                            <h2>Pro</h2>
                            <p className="card-description">
                                For Better UI/UX analysis and feedback
                            </p>
                        </div>
                        
                        <div className="price-section">
                            <div className="price">$9.99</div>
                            <div className="monthly-price">$9.99 billed monthly</div>
                        </div>

                        <button className="pricing-btn team-btn">
                            <Link to="/signup">Try Pro</Link>
                        </button>

                        <div className="features">
                            <ul>
                                <li>✓ Advanced UI/UX analysis</li>
                                <li>✓ Upto 60 analyses per month</li>
                                <li>✓ Detailed insights & recommendations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="back-home">
                    <Link to="/home">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PricingPage; 
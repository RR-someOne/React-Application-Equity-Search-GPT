import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import WebPageHeaderComponent from "../HomePageHeaderAndFooter/WebPageHeaderComponent";
import HomePageFooter from "../HomePageHeaderAndFooter/HomePageFooter";
import SideBar from "./SideBar";
import "./HomePageComponent.Style.css"
import "../HomePageHeaderAndFooter/HomePageFooter.Style.css"

const HomePageComponent = (history) =>
    <div className="finance-search-home">
        <SideBar/>
        <div className="main-content">
        <WebPageHeaderComponent/>
        
        {/* Hero Section */}
        <div className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1>Get Unlimited Access to Financial Insights—For Free</h1>
                    <p>Compare stocks, analyze market trends, and access breaking financial news. Start investing smarter with Finance Search.</p>
                    
                    <div className="signup-section">
                        <div className="signup-form">
                            <input 
                                type="email" 
                                placeholder="Enter email address" 
                                className="signup-input"
                            />
                            <button className="signup-button">Create Free Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Market Overview Section */}
        <div className="market-section">
            <div className="container">
                <div className="market-grid">
                    <div className="market-index">
                        <h3>Dow Jones</h3>
                        <p className="price">49,359.33</p>
                        <p className="change negative">-83.11 (-0.17%)</p>
                    </div>
                    <div className="market-index">
                        <h3>S&P 500</h3>
                        <p className="price">6,940.01</p>
                        <p className="change negative">-4.46 (-0.0642%)</p>
                    </div>
                    <div className="market-index">
                        <h3>Nasdaq</h3>
                        <p className="price">23,515.39</p>
                        <p className="change negative">-14.63 (-0.0622%)</p>
                    </div>
                    <div className="market-index">
                        <h3>Crude Oil</h3>
                        <p className="price">59.44</p>
                        <p className="change positive">+0.25 (+0.42%)</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
            <div className="container">
                <h2>Why Choose Finance Search?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Stock Analysis</h3>
                        <p>Deep dive into company fundamentals and technical analysis</p>
                    </div>
                    <div className="feature-card">
                        <h3>Market News</h3>
                        <p>Breaking news and market insights updated in real-time</p>
                    </div>
                    <div className="feature-card">
                        <h3>Market Data</h3>
                        <p>Comprehensive market data and financial indicators</p>
                    </div>
                    <div className="feature-card">
                        <h3>Investment Tools</h3>
                        <p>Advanced tools to help you make informed investment decisions</p>
                    </div>
                </div>
            </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
            <div className="container">
                <h2>Start Your Financial Journey Today</h2>
                <Link to="/Finance/Search" className="cta-button">Search Now</Link>
            </div>
        </div>

        <HomePageFooter/>
        </div>
    </div>


const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(HomePageComponent);

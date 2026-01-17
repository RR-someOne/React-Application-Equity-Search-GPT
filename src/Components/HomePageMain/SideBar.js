import React from "react"
import { NavLink } from "react-router-dom"
import "./SideBar.css"

const SideBar = () => {
    return (
        <div className="sidebar">
            {/* Header */}
            <div className="sidebar-header">
                <div className="logo">
                    <span className="logo-text">Finance Search</span>
                    <span className="logo-alpha">α</span>
                </div>
                <button className="close-btn">
                    <i className="fa fa-chevron-left"></i>
                </button>
            </div>

            <div className="divider"></div>

            {/* Premium Section */}
            <div className="sidebar-section premium-section">
                <NavLink to="/FinanceSearch/register" className="sidebar-item">
                    <span className="item-icon" style={{ color: "#2196F3" }}>→</span>
                    <span className="item-text">Create Free Account</span>
                </NavLink>
                <NavLink to="/Finance/Search" className="sidebar-item">
                    <span className="item-icon" style={{ color: "#FF9800" }}>→</span>
                    <span className="item-text">About Premium</span>
                </NavLink>
                <a href="#" className="sidebar-item">
                    <span className="item-icon" style={{ color: "#2196F3" }}>✓</span>
                    <span className="item-text">Explore Picks</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon" style={{ color: "#FF9800" }}>📋</span>
                    <span className="item-text">Virtual Analyst Report</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon" style={{ color: "#4CAF50" }}>✓</span>
                    <span className="item-text">FREE Newsletters</span>
                </a>
            </div>

            <div className="divider"></div>

            {/* Navigation Section */}
            <div className="sidebar-section nav-section">
                <NavLink 
                    to="/FinanceSearch/Home" 
                    className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}
                >
                    <span className="item-icon">α</span>
                    <span className="item-text">Home</span>
                </NavLink>
                <a href="#" className="sidebar-item">
                    <span className="item-icon">⚙</span>
                    <span className="item-text">Stock Analysis</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon">📰</span>
                    <span className="item-text">Market News</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon">📊</span>
                    <span className="item-text">Market Data</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon">💰</span>
                    <span className="item-text">Dividends</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon">💳</span>
                    <span className="item-text">ETFs</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon">📈</span>
                    <span className="item-text">Earnings</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon">🎓</span>
                    <span className="item-text">Education</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon">🎙</span>
                    <span className="item-text">Podcasts</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-icon">▶</span>
                    <span className="item-text">Videos</span>
                </a>
            </div>

            <div className="divider"></div>

            {/* Investing Groups Section */}
            <div className="sidebar-section">
                <div className="section-header">
                    <span className="section-icon">👥</span>
                    <span className="section-title">INVESTING GROUPS</span>
                </div>
                <a href="#" className="sidebar-item">
                    <span className="item-text">Explore Investing Groups</span>
                </a>
            </div>

            <div className="divider"></div>

            {/* Portfolios Section */}
            <div className="sidebar-section">
                <div className="section-header">
                    <span className="section-icon">📈</span>
                    <span className="section-title">PORTFOLIOS</span>
                </div>
                <a href="#" className="sidebar-item">
                    <span className="item-text">Create Portfolio</span>
                    <span className="add-btn">+</span>
                </a>
                <a href="#" className="sidebar-item">
                    <span className="item-text">Portfolio Health Check</span>
                </a>
            </div>
        </div>
    )
}

export default SideBar

import React, { useState } from "react"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import LoginModal from "../LoginPageMain/LoginModal"
import "./WebPageHeader.Style.css"

const WebPageHeaderComponent = (history) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

    return (
        <>
            <div className="finance-header">
                <div className="header-content">
                    {/* Search Bar */}
                    <div className="header-search">
                        <div className="search-box">
                            <input 
                                type="text" 
                                placeholder="Symbols, Analysts, Keywords"
                                className="search-input"
                            />
                            <button className="search-button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="header-nav">
                        <NavLink to="/Finance/Search" className="nav-item">ABOUT PREMIUM</NavLink>
                        <NavLink to="/FinanceSearch/register" className="nav-item btn-primary">CREATE FREE ACCOUNT</NavLink>
                        <button 
                            className="nav-item log-in-btn"
                            onClick={() => setIsLoginModalOpen(true)}
                        >
                            LOG IN
                        </button>
                    </div>
                </div>
            </div>

            <LoginModal 
                isOpen={isLoginModalOpen} 
                onClose={() => setIsLoginModalOpen(false)}
            />
        </>
    )
}

const stateToPropertyMapper = (state) => ({})
const propertyToDispatchMapper = (dispatch) => ({})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(WebPageHeaderComponent);

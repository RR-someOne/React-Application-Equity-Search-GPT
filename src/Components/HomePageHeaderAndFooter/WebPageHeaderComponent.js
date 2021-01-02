import React from "react"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import "./WebPageHeader.Style.css"

const WebPageHeaderComponent = (history) =>
    <div className="container">
        <div className="container-fluid">
        <div className="fixed-top">
            <nav className="navbar navbar-expand-lg navbar-dark stock-webpage-header">
                {/*<a className="navbar-brand" href="#">*/}
                {/*    <img src="https://1000logos.net/wp-content/uploads/2020/04/Nasdaq-Logo.png" width="80" height="60" alt=""*/}
                {/*         loading="lazy"/>*/}
                {/*</a>*/}

                <NavLink className="navbar-brand"
                         to="/stockPal/home"><span className="sr-only">
                        (current)</span>
                    StockPal
                </NavLink>

                <div className="collapse navbar-collapse wbdv-button wbdv-list-layout wbdv-padding" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item nav-link">
                <NavLink className="navbar-brand"
                         to="/stockPal/login"><span className="sr-only">
                        (current)</span>
                    Login
                </NavLink>
                        </li>

                        <li className="nav-item nav-link">
                <NavLink className="navbar-brand"
                         to="/stockPal/register"><span className="sr-only">
                        (current)</span>
                    Register
                </NavLink>
                        </li>

                        <li className="nav-item nav-link">
                <NavLink className="navbar-brand"
                         to="/stockPal"><span className="sr-only">
                        (current)</span>
                    Profile
                </NavLink>
                        </li>

                        <li className="nav-item nav-link">
                            <NavLink className="navbar-brand"
                                     to="/stockPal/search"><span className="sr-only">
                        (current)</span>
                                Search
                            </NavLink>
                        </li>

                        <li className="nav-item nav-link">
                {/*<NavLink className="navbar-brand"*/}
                {/*         to="/stockPal"><span className="sr-only">*/}
                {/*        (current)</span>*/}
                {/*    Privacy Page*/}
                {/*</NavLink>*/}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </div>
    </div>




const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({


})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(WebPageHeaderComponent);

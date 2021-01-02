import React from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router";
import "../HomePageMain/HomePageBody.Style.css"
import "../HomePageMain/HomePageLogin.css"
import {Link} from "react-router-dom";
import WebPageHeaderComponent from "../HomePageHeaderAndFooter/WebPageHeaderComponent";
import HomePageFooter from "../HomePageHeaderAndFooter/HomePageFooter";

class LoginPage extends React.Component {
    render() {
        return(
            <div>
            <div className="container ">
                <WebPageHeaderComponent/>
                {/*<div className="stockPal-search-centered-heading">*/}
                {/*     <h1 className="stockPal-search-heading-font-size">Stock Pal</h1>*/}
                {/* </div>*/}
                <h1 className="stock-pal-heading-login">
                    Login to Stock Pal
                    <br/>
                    <i className="fa fa-4x fa-user-circle-o stockPal-icon-user" aria-hidden="true"></i>
                </h1>
                {/*<div className="container">*/}
                {/*<i className="fa fa-5x fa-user-circle-o stockPal-icon-user" aria-hidden="true"></i>*/}
                <div className= "wbdv-register-page-margins stockPal-login-heading-font-size ">
                    {/*<h1 className="stock-pal-heading-login">Login to Stock Pal</h1>*/}
                    <form className="stockpal-width-form">
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2 col-form-label">
                                Username </label>
                            <div className="col-sm-7">
                                <input className="form-control"
                                       id="username" placeholder="ourfitnesspal"
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-2 col-form-label">
                                Password </label>
                            <div className="col-sm-7">
                                <input type="password" className="form-control"
                                       id="password" placeholder="enter your password"
                                       />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-7">
                                <Link to={"/"} className="btn btn-primary btn-block"
                                      >Sign In</Link>
                                <div className="row">
                                    <div className="col-6">
                                        <a href="#">Forgot Password?</a>
                                    </div>
                                    <div className="col-6">
                                        <Link to="/" className="float-right">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/*</div>*/}
            <HomePageFooter/>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({

})

export default withRouter(connect(stateToPropertyMapper, propertyToDispatchMapper)(LoginPage))



// <div className="stockPal-search-centered-heading">
//     <h1 className="stockPal-search-heading-font-size">Stock Pal</h1>
// </div>
// <div className="wbdv-container">
// <div className="form-group row">
// <label htmlFor="user" className="col-sm-2 col-form-label">Username</label>
// <div className="col-sm">
// <input id="user" placeholder="username" className="form-control wbdv-field wbdv-username"/>
// </div>
// </div>
//
// <div className="form-group row">
// <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
// <div className="col-sm">
// <input id="password" type="password" placeholder="password"
// className="form-control wbdv-field wbdv-password"/>
// </div>
// </div>
//
// <a href="../profile/profile.template.client.html"
// className="btn btn-primary btn-block wbdv-button wbdv-login">
// Sign In
// </a>
// <span>
// <a href="#" className="wbdv-link wbdv-forgot-password">
// Forgot Password?
// </a>
//
// <a href="../register/register.template.client.html" className="wbdv-signup-anchor wbdv-link wbdv-register">
// Sign up
// </a>
// </span>
// </div>

import React from "react";
import {connect} from "react-redux"
import WebPageHeaderComponent from "../HomePageHeaderAndFooter/WebPageHeaderComponent";
import {onChangeUsername} from "../../Actions/RegisterAction";
import "./Register.css"

const RegisterComponent = ({
    onChangeUsername
                           }) =>
    <div className="container">
        <WebPageHeaderComponent/>
        <div className="stockPal-register-page-margins">
            <h1 className="stockPal-register-align-center">Register</h1>
            <form>
                <div className="form-group row">
                    <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input id="usernameFld"
                               className="form-control"
                               placeholder="stockPal01"
                               onChange={(event) => onChangeUsername(event.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email Address</label>
                    <div className="col-sm-10">
                        <input id="email" type="email"
                               className="form-control"
                               placeholder="user@stockPal.com"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input id="passwordFld" type="password"
                               className="form-control"
                               placeholder="123qwe#$%"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                        Verify Password </label>
                    <div className="col-sm-10">
                        <input id="verifyPasswordFld" type="password"
                               className="form-control"
                               placeholder="123qwe#$%"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">
                        Gender </label>
                    <div className="col-sm-2">
                        <input id="gender" name="gender" type="radio"/> Male
                    </div>
                    <div className="col-sm-2">
                        <input id="gender" name="gender" type="radio"/> Female
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="gender" className="col-sm-2 col-form-label">
                        Role </label>
                    <div className="col-sm-10">
                        <select className="form-control" id="role">
                            <option value="">Choose One</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <button className="btn btn-success btn-md">
                        Sign Up
                    </button>

                </div>
            </form>
    </div>
    </div>


const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({
    onChangeUsername: (username) => onChangeUsername(dispatch, username)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(RegisterComponent)

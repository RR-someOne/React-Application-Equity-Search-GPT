import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux"
import HomePageComponent from "../HomePageMain/HomePageComponent";
import PrivacyPageComponent from "../PrivacyPage/PrivacyPageComponent";
import SearchPageMain from "../SearchPage/SearchPageMain";
import LoginPage from "../LoginPageMain/LoginPage";
import HomePageSearch from "../HomePageMain/HomePageSearch";
import RegisterComponent from "../RegisterMain/RegisterComponent";

class RouterManagerComponent extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div>
                        <Route path={["/stockPal/home", "/stockPal/home/:title"]} exact>
                            <HomePageComponent/>
                        </Route>

                        <Route path={["/stockPal/login"]} exact>
                            <LoginPage/>
                        </Route>

                        {/*//TODO: Build the stockPal search page*/}
                        <Route path={["/stockPal/search", "/stockPal/search/:title",
                            "/stockPal/search/summary"]} exact>
                            <HomePageSearch/>
                        </Route>

                        <Route path={["/stockPal"]} exact>
                            <PrivacyPageComponent/>
                        </Route>

                        <Route path={["/stockPal/register"]} exact>
                            <RegisterComponent/>
                        </Route>
                    </div>
                </Switch>
            </BrowserRouter>
        )
    }
}

const stateToPropertyMapper = (state) => ({

    })

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(RouterManagerComponent)

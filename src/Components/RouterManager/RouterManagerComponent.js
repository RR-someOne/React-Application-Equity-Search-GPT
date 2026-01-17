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
                        <Route path={["/FinanceSearch/Home", "/FinanceSearch/Home/:title"]} exact>
                            <HomePageComponent/>
                        </Route>

                        <Route path={["/FinanceSearch/login"]} exact>
                            <LoginPage/>
                        </Route>

                        {/*//TODO: Build the FinanceSearch search page*/}
                        <Route path={["/Finance/Search", "/Finance/Search/:title",
                            "/Finance/Search/summary"]} exact>
                            <HomePageSearch/>
                        </Route>

                        <Route path={["/FinanceSearch"]} exact>
                            <PrivacyPageComponent/>
                        </Route>

                        <Route path={["/FinanceSearch/register"]} exact>
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

import React from "react"
import {connect} from "react-redux"
import {NavLink} from "react-router-dom"
import WebPageHeaderComponent from "../HomePageHeaderAndFooter/WebPageHeaderComponent";
import SearchComponent from "./HomePageSearch";
import "./HomePageComponent.Style.css"
import HomePageFooter from "../HomePageHeaderAndFooter/HomePageFooter";
import "../HomePageHeaderAndFooter/HomePageFooter.Style.css"
import HomePageBody from "../LoginPageMain/LoginPage";

const HomePageComponent = (history) =>
    <div className="stockPal-background-homepage">
            <div className="container">
                <WebPageHeaderComponent/>
                <SearchComponent/>
                {/*<HomePageBody/>*/}
    </div>
        <HomePageFooter/>
    </div>



const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({

})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(HomePageComponent);

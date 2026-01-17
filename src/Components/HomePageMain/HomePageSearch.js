import React from "react"
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {withRouter} from "react-router";
import "./HomePageSearch.Style.css"
import "./HomePageBody.Style.css"
// import "../HomePageHeaderAndFooter/HomePageFooter.Style.css"
import {autoComplete} from "../../Actions/SearchAction";
import SearchReducer from "../../Reducers/SearchReducer";
import {onChangeStockName,  searchStock, openingPrice, stockXValues, stockYValues} from "../../Actions/SearchAction";
import WebPageHeaderComponent from "../HomePageHeaderAndFooter/WebPageHeaderComponent";
// import HomePageFooter from "../HomePageHeaderAndFooter/HomePageFooter";
import SearchPageFooter from "../HomePageHeaderAndFooter/SearchPageFooter";
// import "../HomePageHeaderAndFooter/SearchPageFooter.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../HomePageHeaderAndFooter/FooterBootstrapComponent"
import FooterPagePro from "../HomePageHeaderAndFooter/FooterBootstrapComponent";
import FooterPage from "../HomePageHeaderAndFooter/FooterBootstrapComponent";
import GraphComponent from "../SearchPage/GraphComponent";

class SearchComponent extends React.Component {

    state = {
        title: "",
        stocks: []
    }

    componentDidMount() {
        this.setState({
            title: this.props.match.params.title
        })
        // console.log(this.props.match.params.title)
        if(this.props.match.params.title) {
            this.props.searchStock(this.props.match.params.title)
        }

        console.log("paramas title", this.props.match.params.title)

        if(this.props.match.params.title) {
            this.props.openingPrice(this.props.match.params.title)
        }

        if(this.props.match.params.title) {
            this.props.stockXValues(this.props.prices)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.title !== this.props.match.params.title) {
            this.setState({
                title: this.props.match.params.title
            })
            if(this.props.match.params.title) {
                this.props.searchStock(this.props.match.params.title)
            }

            if(this.props.match.params.title) {
                this.props.openingPrice(this.props.match.params.title)
            }
            if(this.props.match.params.title) {
                this.props.stockXValues(this.props.prices)
            }
        }
    }

    searchByTitle = (title) => {
        this.props.history.push(`/Finance/Search/${title}`)
        // this.props.history.push(`/Finance/Search/${title}`)
    }

    render() {
        {console.log("This is from the search page x values", this.props.xValues)}
        return(
            <div>
            <div className="container">
                <WebPageHeaderComponent/>
            {/*<div className="stockPal-search-centered-heading">*/}
            {/*    <h1 className="stockPal-search-heading-font-size">Stock Pal</h1>*/}
            {/*</div>*/}
            {/*<div className="stockPal-search-centered">*/}
                <div>
                    <h1 className="stock-pal-heading-search">Finance Search</h1>
                </div>
                <div className="input-group stock-pal-search">
                    {/*<div className="col-sm-7">*/}
                    <input
                        onChange={(event => this.props.onChangeStockName(event.target.value))}
                        className="form-control "
                        placeholder="Search for a stock using stock ticker"/>
                    {/*</div>*/}

                    <div className="input-group-append">
                        <button
                            onClick={() => this.searchByTitle(this.props.title)}
                            className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>

                <div className = "container">
                    {/*<ul className="nav nav-tabs justify-content-center stock-pal-margin-nav-pills">*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <Link to ={`/stockPal/search/tsla`} className = "nav-link active text-dark*/}
                    {/*            stock-pal-pill-heading-margin">*/}
                    {/*            <h3>Summary</h3>*/}
                    {/*        </Link>*/}
                    {/*        /!*<a className="nav-link active" aria-current="page" href="#">*!/*/}
                    {/*        /!*    <h3>Summary</h3></a>*!/*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <Link to ={`/stockPal/search/tsla`} className = "nav-link text-dark*/}
                    {/*            stock-pal-pill-heading-margin">*/}
                    {/*            <h3>Top News</h3>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <Link to ={`/stockPal/search/tsla`} className = "nav-link text-dark">*/}
                    {/*            <h3>Charts</h3>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}

                    <Tabs className="stock-pal-tabs-margin">
                        <TabList>
                            <Tab>
                                        <Link to ={`/Finance/Search/`} className = "nav-link active text-dark">
                                            Summary
                                        </Link>
                                {/*Summary*/}
                            </Tab>
                            <Tab>
                                <Link to ={`/Finance/Search/`} className = "nav-link active text-dark">
                                    Top News
                                </Link>
                            </Tab>
                            <Tab>
                                <Link to ={`/Finance/Search/`} className = "nav-link active text-dark">
                                    Charts
                                </Link>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Summary</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Top News</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Charts</h2>
                        </TabPanel>
                    </Tabs>


                </div>


                <div className="container-fluid">
                    <div>
                    <span>
                    <h2 className="stock-pal-search-name">
                        {this.props.results.Symbol}
                        <i className="fa fa-star-o stock-pal-star-icon-margin" aria-hidden="true"></i>
                    </h2>
                        </span>
                    </div>
                    <h4>{this.props.results.Name}</h4>
                    <div className="container">
                        <div className="col-md-6">
                            <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">52 Week High: {this.props.results['52WeekHigh']}</li>
                                <li className="list-group-item">52 Week Low: {this.props.results['52WeekLow']}</li>
                                <li className= "list-group-item">PE Ratio: {this.props.results.PERatio}</li>
                                <li className= "list-group-item">Profit Margin: {this.props.results.ProfitMargin}</li>
                            </ul>
                        </div>
                            <div className="col-sm-6">
                                <ul className="list-group list-group-flush">
                                <li className= "list-group-item">EPS: {this.props.results.EPS}</li>
                                <li className="list-group-item">Beta: {this.props.results.Beta}</li>
                                    <li className="list-group-item">Book Value: {this.props.results.BookValue}</li>
                                    <li className="list-group-item">Target Price: {this.props.results.AnalystTargetPrice}</li>
                                </ul>
                            </div>
                            </div>
                        <h4 className="text-center stock-pal-heading-company">Company's Description</h4>
                       <p>{this.props.results.Description}</p>
                        </div>
                    </div>

                    {/*<div className="col-md-6">*/}
                    {/*        <p>{this.props.results.Description}</p>*/}
                    {/*</div>*/}
                </div>
            {/*</div>*/}
            </div>

                <GraphComponent/>

            {/*<SearchPageFooter/>*/}
           {/*<footerBootstrapComponent/>*/}
           <FooterPage/>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    title: state.searchReducer.title,
    results: state.searchReducer.results,
    prices: state.searchReducer.prices,
    xValues: state.searchReducer.xValues
})

const propertyToDispatchMapper = (dispatch) => ({
    // autoComplete: (title) => autoComplete(dispatch, title)
    onChangeStockName : (title) => {onChangeStockName(dispatch, title)},
    searchStock: (title) => searchStock(dispatch,  title),
    openingPrice: (title) => openingPrice(dispatch, title),
    stockXValues: (prices) => stockXValues(dispatch),
    stockYValues: (prices) => stockYValues(dispatch)
})

export default withRouter(connect(stateToPropertyMapper, propertyToDispatchMapper)(SearchComponent))

import React from "react";
import {connect} from "react-redux"
import {withRouter} from "react-router";
import {onChangeStockName,  searchStock, openingPrice} from "../../Actions/SearchAction";

class graphComponent extends React.Component {

    state = {
        xValues: [],
        yValues: []
    }

    // componentDidMount() {
    //     if(this.props.match.params.title && this.props.prices) {
    //         this.props.prices.map((prices) =>
    //             this.state.stockXValues.push(prices.key))
    //     }
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(this.props.match.params.title && this.props.prices) {
    //         this.props.prices.map((prices) =>
    //             this.state.stockXValues.push(prices.key))
    //     }
    // }

    render() {
        // console.log("prices from graph component", this.props.prices['Time Series (Daily)'])
        console.log("stock prices array", this.state.stockXValues)

        return(
            <div>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    prices: state.searchReducer.prices,
    title: state.searchReducer.title
})

const propertyToDispatchMapper = (dispatch) => ({
    // openingPrice: (title) => openingPrice(dispatch, title)
})

export default withRouter(connect(stateToPropertyMapper, propertyToDispatchMapper)(graphComponent))

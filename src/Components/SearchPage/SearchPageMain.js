import React from "react"
import {connect} from "react-redux"

class SearchPageMain extends React.Component {

    state = {
        symbol : this.props.match.params.title
    }

    render() {
        return (
            <div>
                <h1>Details {this.state.symbol}</h1>
            </div>
        );
    }
}

const stateToPropertyMapper = (state) => {

}

const propertyToDispatchMapper = (dispatch) => {
}

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(SearchPageMain)

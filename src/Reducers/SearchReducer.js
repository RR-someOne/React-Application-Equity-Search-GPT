import {stockXValues} from "../Actions/SearchAction";

const initialState = {
    title: "",
    results: [],
    prices: [],
    xValues: [],
    yValues: []
}

const searchReducer = (state=initialState, action) => {
    switch (action.type) {
        // case "AUTO_COMPLETE":
        //     return {
        //         ...state,
        //         results: action.results.results,
        //         title: action.title
        //     }
        case "ONCHANGE_TITLE":
            return {
                ...state,
                title: action.title
            }
        case "SEARCH_STOCK":
            // console.log(action.results)
            // console.log("Reducer", action.results)
            return {
                ...state,
                results: action.results,
                title: action.title
            }
        case "OPENING_PRICES":
            console.log("From the reducer", action.prices)
            return {
                ...state,
                prices: action.prices,
                title: action.title
            }
        case "STOCK_X_VALUES":
            // console.log("From the reducer stock array,", state.stockXValues)
            return {
                ...state,
                xValues: action.prices
            }
        case "STOCK_Y_VALUES":
            return {
                ...state,

            }
        default:
            return state;
    }
}

export default searchReducer

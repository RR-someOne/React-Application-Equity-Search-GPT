import searchService from "../Services/SearchService"

// //TODO: Build the action for the autocomplete
// export const autoComplete = (dispatch, title) => {
//     SearchService.autoCompleteService(title).then(results => {
//         console.log(results.results)
//     dispatch({type:"AUTO_COMPLETE", results, title})})
// }

export const onChangeStockName = (dispatch, title) => {
    dispatch({type: "ONCHANGE_TITLE", title})
}

export const  searchStock = (dispatch,  title) => {
    searchService.stockSearchService(title).then(results => {
        // console.log("These are the results of tsla:", results);
        dispatch({type: "SEARCH_STOCK", results,  title})
    })
}

export const openingPrice= (dispatch, title) => {
    searchService.openingPriceService(title).then(prices => {
    // console.log("This is the response", response);
    dispatch({type: "OPENING_PRICES", prices, title})
    })
}

export const stockXValues = (disptach, prices) => {
    disptach({type: "STOCK_X_VALUES", prices})
}

export const stockYValues = (disptach, prices) => {
    disptach({type: "STOCK_Y_VALUES", prices})
}

const AUTO_COMPLETE = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&";
const STOCK_SEARCH = "https://www.alphavantage.co/query?function=OVERVIEW&symbol="
const OPENING_PRICES = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="

const API_KEY = "BPAP3A0S4HKYLXSU";

const autoCompleteService = (itemName) =>
    fetch(`${AUTO_COMPLETE}$keyword=${itemName}&apikey=${API_KEY}`)
    .then(response => response.json())

const stockSearchService = (title) =>
    fetch(`${STOCK_SEARCH}${title}&apikey=${API_KEY}`)
        .then(response =>response.json())

const openingPriceService = (title) =>
    fetch(`${OPENING_PRICES}${title}&outputsize=compact&apikey=${API_KEY}`)
        .then(response => response.json())

export default {stockSearchService, openingPriceService}

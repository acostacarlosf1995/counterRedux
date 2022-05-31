import { types } from "../types";

export const fetchQuotes = () => async dispatch => {
    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const quotes = await response.json();
    dispatch({
        type: types.fetchQuotes,
        payload: quotes[0]
    })
}
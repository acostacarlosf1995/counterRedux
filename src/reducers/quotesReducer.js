import { types } from "../types";

const INITIAL_STATE = {};

export const quotesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case types.fetchQuotes:
            return {
                ...state,
                payload: action.payload
            }

        default:
            return state;
    }
};
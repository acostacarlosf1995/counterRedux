import { types } from "../types";

const INITIAL_STATE = {
  quote: "",
  author: "",
};

export const quotesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.fetchQuotes:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

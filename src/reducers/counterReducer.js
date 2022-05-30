import { types } from "../types";

const INITIAL_STATE = 0;

export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.counterAddOne:
      return state + 1;

    case types.counterSubtractOne:
      return state - 1;

    case types.counterReset:
      return INITIAL_STATE;

    case types.counterAddNumber:
      return state + action.payload;

    default:
      return state;
  }
};

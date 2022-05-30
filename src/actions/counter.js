import { types } from "../types";

export const plus = () => {
    return {
        type: types.counterAddOne,
    };
};

export const minus = () => {
    return {
        type: types.counterSubtractOne,
    };
};

export const reset = () => {
    return {
        type: types.counterReset,
    };
};

export const typeCount = (number) => {
    return {
        type: types.counterAddNumber,
        payload: number
    }
}
export const plus = () => {
    return {
        type: "PLUS",
    };
};

export const minus = () => {
    return {
        type: "MINUS",
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const typeCount = (number) => {
    return {
        type: "TYPECOUNT",
        payload: number
    }
}
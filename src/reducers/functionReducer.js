
export const counterReducer = ( state = 0, action ) => {
    switch ( action.type ) {
        case 'PLUS':
            return state + 1

        case 'MINUS':
            return state - 1

        case 'RESET':
            return (state = 0)

        case 'TYPECOUNT':
            return state = action.payload

        default:
            return state;
    }
}
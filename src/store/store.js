import { createStore, combineReducers } from 'redux'
import { counterReducer } from "../reducers/functionReducer";

export const allReducers = combineReducers({
    counterReducer
})

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
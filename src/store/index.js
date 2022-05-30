import { createStore, combineReducers } from 'redux'
import { counterReducer } from "../reducers/counterReducer";

export const allReducers = combineReducers({
    counter: counterReducer
})

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
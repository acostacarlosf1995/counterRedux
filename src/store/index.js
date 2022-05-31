import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { counterReducer } from "../reducers/counterReducer";
import { quotesReducer } from "../reducers/quotesReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const allReducers = combineReducers({
    counter: counterReducer,
    quotes: quotesReducer
})

export const store = createStore(
    allReducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
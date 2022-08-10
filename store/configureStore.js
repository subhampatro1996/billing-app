import React from 'react'
import { applyMiddleware, createStore,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import AccountReducer from '../reducers/AccountReducer'
import BillingReducer from '../reducers/BillingReducer'
import { CustomerReducer } from '../reducers/CustomerReducer'
import { ProductReducer } from '../reducers/ProductReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        account : AccountReducer,
        customer : CustomerReducer,
        product : ProductReducer,
        billDetails : BillingReducer
    }),applyMiddleware(thunk))
    return store;
}

export default configureStore
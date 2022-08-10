import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { asyncGetBill } from './actions/BillingAction';
import { asyncGetCustomers } from './actions/CustomerAction';
import { asyncGetProducts } from './actions/ProductAction';
import { asyncGetUser } from './actions/AccountAction';

// import 'bootstrap/dist/css/bootstrap.css'
const store = configureStore()
store.getState()

store.subscribe(()=>{
    console.log(store.getState())
})

const isTokenFound = localStorage.hasOwnProperty("token")
// useEffect(()=>{
//     if(isTokenFound){
//         store.dispatch(asyncGetUser())
//         store.dispatch(asyncGetCustomers())
//         store.dispatch(asyncGetProducts())
//         store.dispatch(asyncGetBill())
//     }
// },[isTokenFound])
    



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
);


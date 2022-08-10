import NavBar from "./components/NavBar";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetCustomers } from './actions/CustomerAction';
import { asyncGetProducts } from './actions/ProductAction';
import { asyncGetBill } from "./actions/BillingAction";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [isLoading,setIsLoading] = useState(true)
  const bills = useSelector((state) => {
    return state.billDetails;
  });

  const customer = useSelector((state) => {
    return state.customer;
  });
  const product = useSelector((state) => {
    return state.product;
  });
  const dispatch = useDispatch()

  const handleAuth = ()=>{
    setIsLoggedIn(!isLoggedIn)
  }

  useEffect(()=>{
    if(product.length>0 || customer.length>0 || bills.length>0){
      setIsLoading(false)
    }
    },[product,customer,bills])

  const isTokenFound = localStorage.getItem("token")
  useEffect(()=>{
    if(isTokenFound){
        dispatch(asyncGetCustomers())
        dispatch(asyncGetProducts())
        dispatch(asyncGetBill())
    }
},[isTokenFound])

  useEffect(()=>{
    if(localStorage.getItem("token")){
      handleAuth()
    }
  },[])

  return (
    <div className="container-fluid">
      <NavBar isLoggedIn={isLoggedIn} handleAuth={handleAuth}/>
    </div>
  );
}

export default App;



// http://dct-pos-app.herokuapp.com/api
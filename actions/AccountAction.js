import axios from "axios"
import { getProducts } from "./ProductAction"
import { getCustomers } from "./CustomerAction"
import { getBills } from "./BillingAction"
const token = localStorage.getItem("token")
export const asyncGetUser = ()=>{
    return (dispatch)=>{
        axios.get('http://dct-pos-app.herokuapp.com/api/users/account',{
            headers : {
                "Authorization" : 'Bearer ' + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                console.log(result.errors)
            }else{
                dispatch(getUser(result))
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getUser = (data)=>{
    return{
        type : "GET_USER",
        payload : data
    }
}


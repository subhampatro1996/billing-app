import axios from "axios"
const token = localStorage.getItem("token")

export const asyncAddBill = (data,redirect)=>{
    return(dispatch)=>{
        axios.post('http://dct-pos-app.herokuapp.com/api/bills',data,{
            headers:{
                "Authorization" : "Bearer " + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                console.log(result)
            }else{
                console.log("result",result)
                dispatch(addBill(result))
                console.log("addBills",result._id)
                redirect(result._id)
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const addBill = (data)=>{
    console.log(data)
    return{
        type : "ADD_BILL",
        payload : data
    }
}

export const asyncGetBill = () => {
    return(dispatch) => {
        axios.get('http://dct-pos-app.herokuapp.com/api/bills', {
            headers: {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data 
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                console.log(result)
                dispatch(getBills(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const getBills = (data) => {
    return {
        type: 'GET_BILL',
        payload: data
    }
}


export const asyncDeleteBill = (id) => {
    return(dispatch) => {
        axios.delete(`http://dct-pos-app.herokuapp.com/api/bills/${id}`, {
            headers : {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(deleteBill(id))
            }
        })
        .catch((err) => {
            alert(err.message)
        })

    }
}

const deleteBill = (data) => {
    return {
        type: 'DELETEBILL',
        payload: data
    }
}

import axios from 'axios'
const token = localStorage.getItem("token")

export const asyncAddCustomer = (data)=>{
    return (dispatch)=>{
        axios.post('http://dct-pos-app.herokuapp.com/api/customers',data,{
            headers : {
                "Authorization" : `Bearer ` + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.errors)
            }else{
                dispatch(addCustomer(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const addCustomer = (data)=>{
    return{
        type : 'ADD_CUSTOMER',
        payload : data
    }
}

export const asyncGetCustomers = ()=>{
    return (dispatch)=>{
        axios.get('http://dct-pos-app.herokuapp.com/api/customers',{
            headers : {
                "Authorization" : "Bearer " +token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.errors)
            }else{
                dispatch(getCustomers(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const getCustomers = (data)=>{
    return{
        type : "GET_CUSTOMERS",
        payload : data
    }
}

export const asyncDeleteCustomer = (_id)=>{
    console.log(_id)
    return (dispatch)=>{
        axios.delete(`http://dct-pos-app.herokuapp.com/api/customers/${_id}`,{
        headers : {
            "Authorization" : "Bearer " + token
        }
    })
    .then((res)=>{
        const result = res.data
        if(result.hasOwnProperty("errors")){
            alert(result.errors)
        }else{
            console.log()
            dispatch(deleteCustomer(_id))
        }
     })
     .catch((err)=>{
         alert(err.message)
     })
    }
    

}

export const deleteCustomer = (id)=>{
    console.log("creator",id)
    return{
        type : "DELETE_CUSTOMER",
        payload : id
    }
}


export const asyncUpdateCustomer = (updatedData,id)=>{
    console.log("ayncUpdateCustomer",id,updatedData)
    return(dispatch)=>{
        axios.put(`http://dct-pos-app.herokuapp.com/api/customers/${id}`,updatedData,{
            headers : {
                "Authorization" : "Bearer " + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.errors)
            }else{
                dispatch(updateCustomer(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}

export const updateCustomer = (result)=>{
    console.log("updateCustomer",result)
    return{
        type : "UPDATE_CUSTOMER",
        payload : result
    }
}
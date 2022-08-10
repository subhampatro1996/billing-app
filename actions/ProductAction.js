import axios from "axios"
const token = localStorage.getItem('token')

export const asyncAddProduct = (data)=>{
    return(dispatch)=>{
        axios.post('http://dct-pos-app.herokuapp.com/api/products',data,{
            headers : {
                "Authorization" : "Bearer " + token
            }
        }).then((res)=>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.errors)
            }else{
                dispatch(addProduct(result))
            }
        })
    }
}

export const addProduct = (data)=>{
    return{
        type : "ADD_PRODUCT",
        payload : data
    }
}

export const asyncGetProducts = ()=>{
        return(dispatch)=>{
            axios.get('http://dct-pos-app.herokuapp.com/api/products',{
                headers : {
                    "Authorization" : "Bearer " + token
                }
            })
            .then((res)=>{
                const result = res.data
                if(result.hasOwnProperty("errors")){
                    alert(result.errors)
                }else{
                    dispatch(getProducts(result))
                }
            })
        }
}

export const getProducts = (data)=>{
    return{
        type : "GET_PRODUCTS",
        payload : data
    }
}

export const asyncDeleteProduct = (id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-pos-app.herokuapp.com/api/products/${id}`,{
            headers:{
                "Authorization" : "Bearer " + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.errors)
            }else{
                dispatch(deleteProduct(id))
            }
        })
    }
}

export const deleteProduct = (id) =>{
    // console.log("deleted",id)
    return{
        type : "DELETE_PRODUCT",
        payload : id
    }
}
export const asyncUpdateProduct = (updatedData,id) => {
    return(dispatch)=>{
        axios.put(`http://dct-pos-app.herokuapp.com/api/products/${id}`,updatedData,{
            headers : {
                "Authorization" : "Bearer " + token
            }
        })
        .then((res)=>{
            const result = res.data
            if(result.hasOwnProperty("errors")){
                alert(result.errors)
            }else{
                console.log("success",result)
                dispatch(updateProduct(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })

    }
}
export const updateProduct = (data)=>{
    console.log("updatedData",data)
    return{
        type : "UPDATE_PRODUCT",
        payload : data
    }
}
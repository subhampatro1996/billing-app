const initialState = []

export const ProductReducer = (state=initialState,action)=>{
    switch(action.type) {
        case "ADD_PRODUCT":{
            return [action.payload, ...state]
        }
        case "GET_PRODUCTS":{
            return [...action.payload]
        }
        case "DELETE_PRODUCT":{
            const result = state.filter((ele)=>{
                return ele._id !== action.payload
            })
            return result
        }
        case "UPDATE_PRODUCT":{
            const res = state.map((ele)=>{
                if(ele._id === action.payload._id){
                    return {...ele,...action.payload}
                }else{
                    return {...ele}
                }
            })
            return res
        }
        default :{
            return state
        }
    }
}
const initialState = []
export const CustomerReducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_CUSTOMER" : {
            return [{...action.payload},...state]
        }
        case "GET_CUSTOMERS" : {
            return [...action.payload]
        }
        case "DELETE_CUSTOMER" : {
            const res = state.filter((ele)=>{
                return ele._id !== action.payload
            })
            return res
        }
        case "UPDATE_CUSTOMER" : {
            const res = state.map((ele)=>{
                if(ele._id === action.payload._id){
                    return {...action.payload}
                }else{
                    return {...ele}
                }
            })
            return res
        }
        default : {
            return state
        }
    }
}


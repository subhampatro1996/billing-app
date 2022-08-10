const inititialState = []


const BillingReducer = (state=inititialState, action) =>{
    switch (action.type) {
        case "ADD_BILL":{
            // return {...state, bills:[...state.bills, action.payload]}
            return [...state,{...action.payload}]
        }
        case 'GET_BILL' : {
            // return [...action.payload]
            return [...state,...action.payload]
        }
        case 'DELETEBILL' : {
            return state.filter((ele) => {
                return ele._id !== action.payload
            })
        }
    
        default:  {
            return state
        }
    }
}


export default BillingReducer


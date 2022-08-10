import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetCustomers } from '../actions/CustomerAction'
import CustomerData from './CustomerData'
import '../CSS/customer.css'
const CustomerList = (props) => {
    const dispatch = useDispatch()
    const customer = useSelector((state)=>{
        return   state.customer
    })
    // useEffect(()=>{
    //     if(localStorage.getItem("token")){
    //         dispatch(asyncGetCustomers())
    //     }
    // },[])


  return (
    <div>
        {
            customer.length === 0  ? (
                <div>
                <b>No Customer Added</b> | 
                <b>Add Your First Customer</b>
                </div>
            ):(
                <>
                    {/* <h1 className="text-center">Customer List - {customer.length}</h1> */}
                    <h1 className="text-center">Customer Details - {customer.length}</h1>
                    <div className="flex-container jsutify-content-center">
                    {
                        customer.map((ele)=>{
                            return <CustomerData key={ele._id} {...ele} />
                        })
                    }
                    </div>
                </>
            )
        }
    </div>
  )
}

export default React.memo(CustomerList)
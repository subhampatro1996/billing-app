import React from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'
import "../CSS/customer-form.css"
const CustomerContainer = () => {
  return (
    <div className="cust-container">
         <div className="d-flex justify-content-center">
        <CustomerForm/>
        </div>

        {/* <CustomerList/> */}
    </div>
  )
}

export default CustomerContainer

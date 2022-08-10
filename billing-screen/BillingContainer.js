import React from 'react'
import BillingForm from './BillingForm'
import { useHistory } from 'react-router'


const BillingContainer = () => {
  const history = useHistory()
  const handleBill = ()=>{
    history.push("/bills/all")
  }
  return (
    <div className="p-2">
        
        <div>
            <button onClick={handleBill}>View All Bills</button>
        </div>
        <BillingForm/>
    </div>
  )
}

export default BillingContainer
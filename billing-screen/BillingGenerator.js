import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ReactToPdf from 'react-to-pdf'

const BillingGenerator = () => {
    const ref = useRef()
    const params = useParams()
    const bill = useSelector((state)=>{
        console.log("state.bills",state.billDetails)
        return state.billDetails.filter(bil => bil._id === params.billId)[0]
    })

    const customer  = useSelector((state)=>{
        return state.customer.filter(cus => cus._id === bill.customer)[0]
    })
    const user = useSelector((state)=>{
        return state.account
    })
    const products = useSelector((state)=>{
        return state.product
    })
    const billProducts = bill.lineItems.map(item =>{
        const result =  products.filter(prod => prod._id === item.product)[0]
        result.quantity = item.quantity
        result.subTotal = item.subTotal
        return result 
    })

  return (
    <div style={{border:"1px solid black", backgroundColor:"white"}}>
                <div ref={ref}  >
                <h2>{customer.name}</h2>
                <ul>
                    { 
                    billProducts.map((prod,index)=>{
                        return (
                            <div >
                            
                                <p >Product - {prod.name}- {prod.subTotal}</p>

                                </div>
                        )
                    })
                    
                    }
                </ul>
                <p>Total - {bill.total}</p>
                </div>
            <div>
            <ReactToPdf targetRef={ref} filename="bill.pdf" x={.5} y={.5} scale={0.8}>
        {({toPdf}) => (
            <button onClick={toPdf}>download</button>
        )}
    </ReactToPdf>
            </div>
        </div>
  )
}

export default BillingGenerator
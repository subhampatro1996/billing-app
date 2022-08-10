import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { asyncGetUser } from '../actions/AccountAction'
const Account = () => {
    const dispatch = useDispatch()
    const account = useSelector((state)=>{
        return state.account
    })
    useEffect(()=>{
        dispatch(asyncGetUser())
    },[dispatch])
    console.log(account)
  return (
    <div 
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxSizing: "border-box",
        background: "linear-gradient(to right, #430089, #82ffa1)",
        width: "100%",
        height: "580px",
        backgroundSize: "cover",
        textAlign: "center",

      }}
    >   <div 
    style={{
        marginTop:"10%",
        marginBottom:"20%",
        lineHeight:"3rem",
        fontSize:"20px",
        textTransform: "uppercase",
        textIndent : "40px",
        textShadow: "2px 2px",
        textAlignLast:"center",
        
        }}
        >
        <h1>Account Details</h1>
        <h3>Business Name - {account.businessName}</h3>
        <h3>Address - {account.address}</h3>
        </div>
    </div>
  )
}

export default  Account

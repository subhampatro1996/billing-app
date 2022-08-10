import React from "react";
import "../CSS/customer.css"
const AllCustomers = (props) => {
  const { name, mobile, email, handleToggle, handleCustomerRemove } = props;
  return (
    <div>
      {/* <div className="container">
        <div className="row" style={{width: "15rem", border:"2px solid red"}}>
        <div className="col-4">
        <div className="card">
          <b>Customer Name - {name}</b>
          <b>Customer Mobile - {mobile}</b>
          <b>Customer Email - {email}</b>
          <button className="btn btn-primary m-2" style={{width:"80px"}} onClick={handleCustomerRemove}>Delete</button>
          <button className="btn btn-primary m-2" style={{width:"80px"}} onClick={handleToggle}>Edit</button>
          </div>
          </div>
        </div>
        </div> */}
      {/*  */}

      

      <div className="flex-container">
        <div className="flex-box">
        <h5>{name}</h5>
        <h5>{mobile}</h5>
        <h5>{email}</h5>
        <button className="btn btn-primary m-2"  onClick={handleCustomerRemove}>Delete</button>
        <button className="btn btn-primary m-2"  onClick={handleToggle}>Edit</button>
        </div>
        </div>
        </div>
     
  );
};

export default AllCustomers;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDeleteCustomer,
  asyncUpdateCustomer,
} from "../actions/CustomerAction";
import AllCustomers from "./AllCustomers";
import EditCustomer from "./EditCustomer";


const CustomerData = (props) => {
  const [status, setStatus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const { _id, name, mobile, email } = props;

  const dispatch = useDispatch();
  const handleCustomerRemove = () => {
    if (window.confirm("Are you Sure")) {
      dispatch(asyncDeleteCustomer(_id));
    }
  };
  const handleToggle = () => {
    setStatus(!status);
    setModalStatus(!modalStatus)
  };
  console.log("customerdata modal",modalStatus)

  return (
    <div>
      {status ? (
        <div>
          <EditCustomer
            id={_id}
            name={name}
            email={email}
            mobile={mobile}
            handleToggle={handleToggle}
            modalStatus={modalStatus}
          />
          {/* <button onClick={handleToggle}>Cancel</button> */}
        </div>
      ) : (

        
        
        <AllCustomers
          id={_id}
          name={name}
          mobile={mobile}
          email={email}
          handleToggle={handleToggle}
          handleCustomerRemove={handleCustomerRemove}
        />
       


      )}
    </div>
  );
};

export default React.memo(CustomerData);

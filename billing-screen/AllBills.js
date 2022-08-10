import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteBill } from "../actions/BillingAction";

const AllBills = () => {
  const dispatch = useDispatch()
  const bills = useSelector((state) => {
    return state.billDetails;
  });

  const customer = useSelector((state) => {
    return state.customer;
  });
  const product = useSelector((state) => {
    return state.product;
  });
  const allCustomerBills = () => {
    const allBills = bills.map((bill) => {
      const customerDetails = customer.filter((cus) => {
        return cus._id === bill.customer;
      })[0];
      if (customerDetails) {
        const newBill = bill.lineItems.map((item) => {
          const details = product.filter(
            (prod) => prod._id === item.product
          )[0];

          return {
            quantity: item.quantity,
            subTotal: item.subTotal,
            ...details,
          };
        });
        return {
          customerName: customerDetails.name,
          billId: bill._id,
          products: newBill,
          total: bill.total,
        };
      } else {
        return { error: "Not Found" };
      }
    });
    return allBills.filter((bill) => !bill.error).flat();
  };
  const currentProductDetails = allCustomerBills();

  const handleRemove=(id)=>{
    const confirm = window.confirm('Are you sure')
    if(confirm){
        dispatch(asyncDeleteBill(id))
    }
}
  return (
    <div>
      {currentProductDetails.map((ele, index) => {
        return (
          <div key={index}>
            <div>
              <h4>Customer - {ele.customerName}</h4>
            </div>
            <div>
              <ol>
                {ele.products.map((item, index) => {
                  return (
                    <li
                      key={index}
                    >{`Produtc Details - ${item.name} - ${item.quantity} - ${item.subTotal}`}</li>
                  );
                })}
              </ol>
            </div>
            <h4>Total - {ele.total}</h4>
            <div>
              <button onClick={()=>{handleRemove(ele.billId)}}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBills;

import React, { useState } from "react";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { asyncAddBill } from "../actions/BillingAction";
import { useHistory } from "react-router";

const BillingForm = () => {
  const [btnClick,setBtnClick] = useState(true) 
  const history = useHistory()
  const generateNewProduct = () => {
    return {
      product: "",
      quantity: "",
    };
  };
  const [lineItems, setLineItems] = useState([generateNewProduct()]);
  const [lineItemErrors, setLineItemErrors] = useState([generateNewProduct()]);
  const customer = useSelector((state) => {
    return state.customer;
  });
  const product = useSelector((state) => {
    return state.product;
  });
  const dispatch = useDispatch();
  const redirect =(billId) =>{
    history.push(`/billing/${billId}`)  
  }
  const formik = useFormik({
    initialValues: {
      date: "",
      customer: "",   
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Choose date"),
      customer: Yup.string().required("this field is required"),
    }),

    onSubmit: (values) => {
      dispatch(asyncAddBill({ ...values, lineItems },redirect));
    },
  });

  const hanldeSelectChange = (e, index) => {
    const value = e.target.value;
    const lineItemIds = lineItems.map((item) => item.product);
    if (lineItemIds.includes(value)) {
      const newError = lineItemErrors.map((err, i) => {
        if (i === index) {
          err.product = "Product Already Selected";
        }
        return err;
      });
      setLineItemErrors(newError);
    } else {
      const newLineItems = lineItems.map((item, i) => {
        if (i === index) {
          return { ...item, product: value };
        } else {
          return { ...item };
        }
      });
      setLineItems(newLineItems);
      const newError = lineItemErrors.map((err, i) => {
        if (i === index) {
          err.product = "";
        }
        return err;
      });
      setLineItemErrors(newError);
    }
  };
  const handleQuantityChange = (e, index) => {
    const newLineItems = lineItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: e.target.value };
      } else {
        return { ...item };
      }
    });
    setLineItems(newLineItems);
  };
  // console.log("lineItems", lineItems);
  const handleAddMoreClick = () => {
    console.log("ha",btnClick)
    if(btnClick){
    const newProduct = generateNewProduct();
    setLineItems([...lineItems, { ...newProduct }]);
    setLineItemErrors([...lineItemErrors, { ...newProduct }]);
    handleToggle()
    }
    
  };
  const handleToggle = ()=>{
    console.log("ht",btnClick)
    setBtnClick(!btnClick)
  }

  return (
    <div
      className="login"
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxSizing: "border-box",
        background: "linear-gradient(to right, #430089, #82ffa1)",
        width: "100%",
        height: "580px",
        backgroundSize: "cover",
        textAlign: "center",
        overflow: "auto"
      }}
    >
    <div className="form-group">
      <h1>Make A Bill</h1>
      <form  onSubmit={formik.handleSubmit}
        style={{
          width: "600px",
          height: "300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <input
          type="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-control"
        />
        {formik.touched.date && formik.errors.date && (
          <b style={{color:"red"}}>{formik.errors.date}</b>
        )}

        <br />

        <select
          className="form-control"
          name="customer"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="select customer">select customer</option>
          {customer.map((ele,i) => {
            return (
              <option key={i} value={ele._id}>
                {ele.name}
              </option>
            );
          })}
        </select>
        {formik.touched.customer && formik.errors.customer && (
          <b style={{color:"red"}}>{formik.errors.customer}</b>
        )}
        <br />

        {lineItems.map((ele, index) => {
          return (
            <>
              <select
                key={index}
                name="product"
                className="form-control"
                onChange={(e) => hanldeSelectChange(e, index)}
              >
                <option>Select Product</option>
                {product.map((ele, i) => {
                  return (
                    <option key={i} value={ele._id}>
                      {ele.name}
                    </option>
                  );
                })}
              </select>
              {lineItemErrors[index].product && lineItemErrors[index].product}

              <br />

              <br />
              <input
                className="form-control"
                type="text"
                name="lineItems.quantity"
                onChange={(e) => {
                  handleQuantityChange(e, index);
                }}
                value={ele.quantity}
                placeholder="enter quantity"
              />
              {lineItemErrors[index].quantity && lineItemErrors[index].quantity}
            </>
          );
        })}
        <br />
        <div className="d-flex justify-content-between">
        {
        btnClick ? (<button onClick={handleToggle}>Cancel</button>):(
        <input type="button" className="btn btn-primary" value="Add More" onClick={handleAddMoreClick  } />)
        }
        <br />
        <button type="submit" className="btn btn-primary">
          Generate Bill
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default React.memo(BillingForm);

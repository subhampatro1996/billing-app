import React from "react";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { asyncAddBill } from "../actions/BillingAction";

const BillingForm = () => {
  const customer = useSelector((state) => {
    return state.customer;
  });
  const product = useSelector((state) => {
    return state.product;
  });
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      date: "",
      customer: "",
      lineItems: {
        product: "",
        quantity: "",
      },
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Choose date"),
      customer: Yup.string().required("this field is required"),
      lineItems: Yup.object({
        product: Yup.string().required("This field is required"),
        quantity: Yup.string().required("This field is required"),
      }),
    }),
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(asyncAddBill(values))
    },
  });
  return (
    <div className="form-group">
      <h1>Make A Bill</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-control"
        />
        {formik.touched.date && formik.errors.date && (
          <b>{formik.errors.date}</b>
        )}

        <br />

        {/* <input
          className="form-control"
          type="text"
          name="customer"
          value={formik.values.customer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.customer && formik.errors.customer && (
          <b>{formik.errors.customer}</b>
        )} */}

        <select
          className="form-control"
          name="customer"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="select customer">select customer</option>
          {customer.map((ele) => {
            return <option key={ele._id} value={ele._id}>{ele.name}</option>;
          })}
        </select>
        {formik.touched.customer && formik.errors.customer && (
          <b>{formik.errors.customer}</b>
        )}
        <br />

        {/* <input
          className="form-control"
          type="text"
          name="lineItems.product"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lineItems.product}
        /> */}
        <select
          className="form-control"
          name="lineItems.product"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="select product">select product</option>
          {product.map((ele) => {
            return <option key={ele._id} value={ele._id}>{ele.name}</option>;
          })}
        </select>
        {formik.touched.product && formik.errors.product && (
          <b>{formik.errors.product}</b>
        )}
        <br />

        <br />
        <input
          className="form-control"
          type="text"
          name="lineItems.quantity"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lineItems.quantity}
        />
        <br/>
        <button onClick="">Add More</button>
        <br />
        <button type="submit" className="btn btn-primary">
          Generate Bill
        </button>
      </form>
    </div>
  );
};

export default BillingForm;

{
  /* {formik.touched.lineItems.product &&
          formik.errors.lineItems.product && (
            <b>{formik.errors.lineItems.product}</b>
          )} */
}

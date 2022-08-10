import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncAddCustomer,
  asyncUpdateCustomer,
} from "../actions/CustomerAction";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const CustomerForm = (props) => {
  const { id, name, mobile, handleToggle, email, modalStatus } = props;
  const [modal, setmodal] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: name ? name : "",
      mobile: mobile ? mobile : "",
      email: email ? email : "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "minimum 4 character required")
        .max(12, "can not exceed moretha 12 character")
        .required("This field is required"),

      mobile: Yup.string()
        .min(10, "minimum 10 character required")
        .max(10, "can not exceed moretha 10 character")
        .required("number field can not be blank"),

      email: Yup.string()
        .email("please enter the valid email")
        .required("This field is required"),
    }),
    onSubmit: (loginFormData, { resetForm }) => {
      if (id) {
        dispatch(asyncUpdateCustomer(loginFormData, id));
        resetForm({ values: "" });
        handleToggle();
      } else {
        dispatch(asyncAddCustomer(loginFormData));
        resetForm({ values: "" });
      }
    },
  });
  useEffect(() => {
    setmodal(modalStatus);
  }, [handleToggle]);

  return (
    <>
      {/* <div className="customer-form"> */}
      {/* <h1>Add Customer</h1> */}
      {modal ? (
        <Modal
          size="lg"
          isOpen={modal}
          // toggle={() => {
          //   setmodal(!modal);
          // }}
        >
          <ModalHeader
          //   toggle={() => {
          //     setmodal(!modal);
          //   }}
          >
            EDIT-FORM
          </ModalHeader>
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputName">Customer Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="exampleInputName"
                  placeholder="Customer name"
                />
                {formik.touched.name && formik.errors.name && (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                )}

                <br />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputMobile">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  id="exampleInputMobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Customer mobile"
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <span style={{ color: "red" }}>{formik.errors.mobile}</span>
                )}
                <br />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail">Email</label>
                <input
                  type="text"
                  name="email"
                  id="exampleInputEmail"
                  className="form-control"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Customer email"
                />
                {formik.touched.email && formik.errors.email && (
                  <span style={{ color: "red" }}>{formik.errors.email}</span>
                )}
                <br />
              </div>
              <div className="d-flex justify-content-between">
                <button
                  type="submit"
                  style={{ width: "180px" }}
                  className="btn btn-primary"
                >
                  Save
                </button>
                {id && (
                  <button
                    className="btn btn-primary"
                    style={{ width: "180px" }}
                    onClick={handleToggle}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </ModalBody>
        </Modal>
      ) : (
        <div
          className="customer-form"
          style={{
            padding: "20px",
            borderRadius: "10px",
            background: "linear-gradient(to right, #430089, #82ffa1)",
            width: "100%",
            height: "580px",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <h1 className="text-center">Customer Form</h1>
          <form
            className="card p-2 customer-form"
            onSubmit={formik.handleSubmit}
            style={{
              width: "600px",
              height: "320px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div className="form-group">
              <label htmlFor="exampleInputName">Customer Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="exampleInputName"
                placeholder="Customer name"
              />
              {formik.touched.name && formik.errors.name && (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              )}

              <br />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputMobile">Mobile</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                id="exampleInputMobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Customer mobile"
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <span style={{ color: "red" }}>{formik.errors.mobile}</span>
              )}
              <br />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Email</label>
              <input
                type="text"
                name="email"
                id="exampleInputEmail"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Customer email"
              />
              {formik.touched.email && formik.errors.email && (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              )}
              <br />
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="submit"
                style={{ width: "180px", margin: "auto" }}
                className="btn btn-primary"
              >
                Save
              </button>
              {id && (
                <button
                  className="btn btn-primary"
                  style={{ width: "180px" }}
                  onClick={handleToggle}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName">Email address</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="exampleInputName"
            placeholder="Customer name"
          />
          {formik.touched.name && formik.errors.name && (
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          )}

          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputMobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            id="exampleInputMobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Customer mobile"
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <span style={{ color: "red" }}>{formik.errors.mobile}</span>
          )}
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail">Email</label>
          <input
            type="text"
            name="email"
            id="exampleInputEmail"
            className="form-control"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Customer email"
          />
          {formik.touched.email && formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          )}
          <br />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            style={{ width: "180px" }}
            className="btn btn-primary"
          >
            Save
          </button>
          {id && (
            <button
              className="btn btn-primary"
              style={{ width: "180px" }}
              onClick={handleToggle}
            >
              Cancel
            </button>
          )}
        </div>
      </form> */}
      {/* </div> */}
    </>
  );
};

export default CustomerForm;

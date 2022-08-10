import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { asyncAddProduct, asyncUpdateProduct } from "../actions/ProductAction";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const ProductForm = (props) => {
  const { id, price, name, handleToggle, modalStatus } = props;
  const [modal, setmodal] = useState(false);
  // console.log("product modal",modalStatus)
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: name ? name : "",
      price: price ? price : "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "minimum 3 character required")
        .max(12, "maximum 12 character required")
        .required("this field is required"),
      price: Yup.number()
        .min(2, "minimum 2 digit required")
        .required("this field is required"),
    }),
    onSubmit: (productData, { resetForm }) => {
      if (id) {
        dispatch(asyncUpdateProduct(productData, id));
        resetForm({ values: "" });
        handleToggle();
      } else {
        dispatch(asyncAddProduct(productData));
        console.log(productData);
        resetForm({ values: "" });
      }
    },
  });
  useEffect(() => {
    setmodal(modalStatus);
  }, [handleToggle]);
  return (
    <>
      {modal ? (
        <Modal size="md" isOpen={modal}>
          <ModalHeader>EDIT-PRODUCT</ModalHeader>
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
              <label htmlFor="prdName">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="product name"
                  className="form-control"
                  id="prdName"
                />
                {formik.touched.name && formik.errors.name && (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                )}
              </div>
              <div className="form-group">
              <label htmlFor="prdPrice">Produc Price</label>
                <input
                  type="number"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="product price"
                  className="form-control"
                  id="prdPrice"
                />
                {formik.touched.price && formik.errors.price && (
                  <span style={{ color: "red" }}>{formik.errors.price}</span>
                )}
              </div>
              <br/>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "150px",
                    margin: "auto",
                  }}
                >
                  Save
                </button>
                {id && (

                  <button
                    className="btn btn-primary "
                    style={{ width: "150px"}}
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
          className="product-form"
          style={{
            padding: "20px",
            borderRadius: "10px",
            boxSizing: "border-box",
            background: "linear-gradient(to right, #430089, #82ffa1)",
            width: "100%",
            height: "565px",
            backgroundSize: "cover",
            textAlign: "center",
          }}
        >
          <h2>Add Products</h2>
          <form
            className="card p-2"
            onSubmit={formik.handleSubmit}
            style={{
              width: "600px",
              height: "300px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              className="form-style"
              style={{
                marginTop: "5px",
                marginBottom: "auto",
                padding: "5px",
                marginLeft: "auto",
                marginRight: "auto",
                width: "500px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <div className="form-group">

                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="product name"
                  className="form-control"
                  id="prdName"
                  style={{ marginTop: "20px", marginBottom: "20px" }}
                />
                {formik.touched.name && formik.errors.name && (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                )}
              </div>
              <div className="form-group">

                <input
                  type="number"
                  name="price"
                  id="prdPrice"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="product price"
                  className="form-control"
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                />
                {formik.touched.price && formik.errors.price && (
                  <span style={{ color: "red" }}>{formik.errors.price}</span>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "180px",
                  margin: "auto",
                }}
              >
                Add
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
      {/* <div className="product-form"
        style={{
        padding: "20px",
        borderRadius: "10px",
        boxSizing: "border-box",
        background: "linear-gradient(to right, #430089, #82ffa1)",
        width: "100%",
        height: "565px",
        backgroundSize: "cover",
        textAlign: "center",
      }}
    >
        <h2>Add Products</h2>
        <form className="card p-2" onSubmit={formik.handleSubmit}
            style={{
          width: "600px",
          height: "300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        >
        <div
          className="form-style"
          style={{
            marginTop: "5px",
            marginBottom: "auto",
            padding: "5px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "500px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
        <div className="form-group">
            <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="product name"
                className="form-control"
                style={{marginTop:"20px" , marginBottom:"20px" }}
            />
            {formik.touched.name && formik.errors.name && <span style={{color : "red"}}>{formik.errors.name}</span>}
        </div>
        <div className="form-group">
            <input
                type="number"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="product price"
                className="form-control"
                style={{marginTop:"30px" , marginBottom:"30px" }}
            />
            {formik.touched.price && formik.errors.price && <span style={{color : "red"}}>{formik.errors.price}</span>}
        </div>
        </div>
            <button type="submit" className="btn btn-primary" style={{
            width: "180px",
            margin: "auto",
        }}>Add</button>
        </form>
    </div>   */}
    </>
  );
};

export default ProductForm;

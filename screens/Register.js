import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Register = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      businessName: "",
      address: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, "minimum 4 character required")
        .required("this field is required"),
      email: Yup.string()
        .email("Please enter the valid email address")
        .required("this field is required"),
      password: Yup.string()
        .min(8, "Please enter the password between 8 - 15 character")
        .max(15, "Please enter the password between 8 - 15 character")
        .required("this field is required"),
      businessName: Yup.string(),
      address: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      const registeredData = values;
      axios
        .post(
          "http://dct-pos-app.herokuapp.com/api/users/register",
          registeredData
        )
        .then((response) => {
          const result = response.data;
          if (result.hasOwnProperty("errors")) {
            alert(result.errors);
          } else {
            alert("Registration Successfull");
            console.log(result);
            props.history.push("/login");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
      resetForm({ values: "" });
    },
  });
  return (
    <div className="register" style={{
      padding: "20px",
        borderRadius: "10px",
        boxSizing: "border-box",
        background: "linear-gradient(to right, #430089, #82ffa1)",
        width: "100%",
        height: "580px",
        backgroundSize: "cover",
        textAlign: "center",
    }}>
      <h1 style={{color:"#ccc"}}>USER REGISTRATION</h1>
      <form className="card p-2" onSubmit={formik.handleSubmit}
        style={{
          width: "600px",
          height: "400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
      <div className="form-style" style={{
        marginTop: "5px",
            marginBottom: "auto",
            padding: "5px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "500px",
            textAlign: "center",
            borderRadius: "10px",

      }}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="enter the username"
            className="form-control"
            id="exampleInputEmail1"
            style={{marginTop:"20px"}}

          />
          {formik.touched.username && formik.errors.username && (
            <span style={{ color: "red" }}>{formik.errors.username}</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="enter the email"
            className="form-control"
            id="exampleInputEmail1"
            style={{marginTop:"20px"}}
          />
          {formik.touched.email && formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="enter the password"
            className="form-control"
            id="exampleInputEmail1"
            style={{marginTop:"20px"}}
          />
          {formik.touched.password && formik.errors.password && (
            <span style={{ color: "red" }}>{formik.errors.password}</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="businessName"
            value={formik.values.businessName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="enter the businessName"
            className="form-control"
            id="exampleInputEmail1"
            style={{marginTop:"20px"}}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="enter the address"
            className="form-control"
            id="exampleInputEmail1"
            style={{marginTop:"20px"}}
          />
        </div>
        </div>
        <div className="text-center p-3">
          <button
            className="btn btn-primary"
            style={{ width: "180px" }}
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

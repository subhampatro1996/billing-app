import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../CSS/login.css";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter the valid email")
        .required("this field is required"),
      password: Yup.string().required("this field is required"),
    }),
    onSubmit: (formSubmitData, { resetForm }) => {
      axios
        .post(
          "http://dct-pos-app.herokuapp.com/api/users/login",
          formSubmitData
        )
        .then((response) => {
          const result = response.data;
          if (result.hasOwnProperty("errors")) {
            alert(result.errors);
          } else {
            alert("Successfully Logged in");
            console.log(result);
            localStorage.setItem("token", result.token);
            props.history.push("/");
            props.handleAuth();
          }
        })
        .catch((error) => {
          alert("error", error.message);
        });
    },
  });
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
      }}
    >
      <h1 className="p-5" style={{ color: "#ccc" }}>
        User Login
      </h1>

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
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter the email"
              className="form-control"
              id="exampleInputEmail1"

                style={{marginTop:"40px" , marginBottom:"40px" }}

            />
            {formik.touched.email && formik.errors.email && (
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            )}
          </div>
          <div className="form-group">
            {/* <label for="exampleInputPassword">Password</label> */}
            <input
              type="text"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter the password"
              className="form-control"
              id="exampleInputPassword"
              style={{marginTop:"40px" , marginBottom:"40px" }}
            />
            {formik.touched.password && formik.errors.password && (
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            )}
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={{
           width: "180px",
      margin: "auto",
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

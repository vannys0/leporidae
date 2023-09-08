import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Email from "../Images/email.png";
import Password from "../Images/password.png";
import "./LoginSignup.css";
import Validation from "./LoginValidation.js";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:3001/", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/rehome");
          } else {
            alert("Incorrect email or password");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="header">
        <div className="text">LOG IN</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={Email} alt="" />
          <input
            type="email"
            name="email"
            onChange={handleInput}
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-danger error-text">{errors.email}</span>
          )}
        </div>
        <div className="input">
          <img src={Password} alt="" />
          <input
            type="password"
            name="password"
            onChange={handleInput}
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-danger error-text">{errors.password}</span>
          )}
        </div>
      </div>
      <div className="forgot-password">
        Forgot password?{" "}
        <span className="span-link">
          {" "}
          <Link to="">Reset Password</Link>
        </span>
      </div>
      <div className="signup-link">
        Don't have an account?{" "}
        <span className="span-link">
          {" "}
          <Link to="/signup">Sign up</Link>
        </span>
      </div>
      <div className="submit-container">
        <button type="submit" className="submit">
          Log In
        </button>
      </div>
    </form>
  );
}

export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Person from "../Images/person.png";
import Email from "../Images/email.png";
import Password from "../Images/password.png";
import "./LoginSignup.css";
import Validation from "./SignupValidation.js";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    Password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:3001/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="header">
        <div className="text">SIGN UP</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={Person} alt="" />
          <input
            type="text"
            name="name"
            onChange={handleInput}
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-danger error-text">{errors.name}</span>
          )}
        </div>
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
      <div className="login-link">
        Already have an account?{" "}
        <span className="span-link">
          {" "}
          <Link to="/">Log in</Link>
        </span>
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Signup;

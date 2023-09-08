import React from "react";
import Navbar from "../Components/Navbar.js";
import "./style.css";
import { Link } from "react-router-dom";
import RabbitAbout from "../Images/rabbit-about.png";

function About() {
  return (
    <div className="about-div">
      <Navbar />
      <div className="content">
        <h2>ABOUT OUR WEBSITE</h2>
      </div>
      <div className="content">
        <h2>Our Mission</h2>
        <p>
          At e-Leporidae, we are driven by a simple but powerful mission: to{" "}
          <br />
          provide a safe and loving environment for rabbits in need of rehoming.{" "}
          <br />
          Our team is dedicated to promoting the well-being of these gentle{" "}
          <br />
          creatures and ensuring that they find their forever homes.
        </p>
      </div>
      <div className="content">
        <h2>Our Goal</h2>
        <p>
          Find a happy home for rabbits <br />
          Educate rabbit owners on responsible care
          <br />
          Create a supportive rabbit-loving community
        </p>
      </div>
      <div className="content">
        <h2>Contact us</h2>
        <Link to="/contact">Click here!</Link>
        <img src={RabbitAbout} alt="" className="rabbit-about" />
      </div>
      <div className="content"></div>
    </div>
  );
}

export default About;

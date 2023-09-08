import React from "react";
import Navbar from "../Components/Navbar.js";
import "./style.css";

function Contact() {
  return (
    <div className="contact-div">
      <Navbar />
      <div className="content">
        <h2>SEND US A MESSAGE</h2>
      </div>
      <div className="content">
        <h2>Want to get in touch with us? Here are the details</h2>
      </div>
      <div className="content">
        <h4>Email us at:</h4>
        <h2>eleporidae@gmail.com</h2>
      </div>
      <div className="content">
        <h4>Call us on:</h4>
        <h2>+63 9482 048 756</h2>
      </div>
      <div className="content">
        <h4>Write to us at:</h4>
        <h2>Concepcion, Libmanan, Camarines Sur</h2>
      </div>
    </div>
  );
}

export default Contact;

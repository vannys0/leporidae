import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/home" className="title">
        <h2 className="brand">e-Leporidae</h2>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/rehome">Rehome</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

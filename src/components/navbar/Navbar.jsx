import React, { useState } from "react";
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div name="top" className="navbar">
      <div className="container">
        <div className="logo">
          <SiDatabricks className="icon" />
          <h1>Secured</h1>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/recovery">Recovery</Link>
          </li>
          <li>
            <Link to="/cloud">Cloud</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>{" "}
          </li>
          <button>Sign In</button>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {nav ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

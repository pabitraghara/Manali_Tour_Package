import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflowY = 'hidden'
  }
  else {
    document.body.style.overflowY = 'scroll'
  }

  return () => {
   document.body.style.overflowY = 'hidden'
  }
}, [isMenuOpen])


return (
  <nav className="navbar-section">
    <div className="nav-bar">
      <img src={logo} alt="" />
    </div>
    <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
      <li>
        <a href="#Home" onClick={() => setIsMenuOpen(false)}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          About
        </a>
      </li>
      <li>
        <a href="#Packages" onClick={() => setIsMenuOpen(false)}>
          Packages
        </a>
      </li>
      <li>
        <a href="#Hotels" onClick={() => setIsMenuOpen(false)}>
          Hotels
        </a>
      </li>
      <i
        onClick={() => setIsMenuOpen(false)}
        className="fa-solid fa-xmark xmark"
      ></i>
      <button className="login-btn-btn">
        <a className="anchor1" to="/login">
          Signup
        </a>
      </button>
    </ul>
    <button className="login-btn">
      <a className="anchor" to="/login">
        Signup
      </a>
    </button>
    <div onClick={() => setIsMenuOpen(true)} className="menu">
      <i className="bx bx-menu"></i>
    </div>
  </nav>
);
};

export default Navbar;

import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header-container">
      <div className="content-left">
        <div className="header-box">
          <i className="bx bxs-phone"></i>
          +91 9381935038
        </div> 
        <div className="vartical-line"> </div>
        <div className="header-box">
          <i className="bx bxs-envelope"></i>
          pabitraghara384@gmail.com
        </div>
        <div className="vartical-line"> </div>
        <div className="header-box">
          <i className="bx bxs-map"></i>
          9-145/38/1, ER, Ayodhya Nagar, Quthbullapur, Hyderabad, Telangana
          500054
        </div>
      </div>
      <div className="content-right">
        <div className="content-lists">
          <i className="bx bxl-whatsapp"></i>
          <i className="bx bxl-instagram-alt"></i>
          <i className="bx bxl-facebook-circle"></i>
          <i className="bx bxl-youtube"></i>
        </div>
        <div className="content-btn">Make Appointment</div>
      </div>
    </header>
  );
};

export default Header;

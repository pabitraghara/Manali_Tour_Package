import React from "react";
import "./Home.css";
import first from "../../assets/1.jpg";
import second from "../../assets/2.jpg";
import third from "../../assets/3.jpg";
import forth from "../../assets/4.jpg";
import five from "../../assets/5.jpg";
const Home = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div id="Home" className="carousel-inner">
          <div className="carousel-item active">
            <img src={first} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={second} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={third} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={forth} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div className="text-overlay">
          <h2>Manali Tour Packages</h2>
          <div className="tour-packages">
            <div className="tour-box">
              <i className="bx bxs-car"></i>
              Volvo
            </div>
            <div className="tour-box">
              <i className="fa-solid fa-bed"></i>
              Accommodation
            </div>
            <div className="tour-box">
              <i className="fa-solid fa-utensils"></i>
              Meal
            </div>
            <div className="tour-box">
              <i className="fa-solid fa-mountain"></i>
              Sightseeing
            </div>
          </div>
          <div className="packages-avalibility">
            <h5>Packages Available form</h5>
            <div className="packages-price">
              <div>
                <h6>&#8377; 5,999 - &#8377; 29,999</h6>
                <h6>Per Person on Twin Sharing</h6>
              </div>
              <div className="price-arrow">
                <i className="fa-solid fa-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="queary-container">
        <div className="home-container">
          <div className="queary-number">
            <h4>Get the Best Holiday Planned by Experts!</h4>
            <div className="queary-for-tour">
              <i className="bx bxs-phone"></i>
              <h3>9381935038</h3>
            </div>
          </div>
          <div className="queary-input">
            <div className="queary-box">
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="queary-box">
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="queary-box">
              <input type="number" placeholder="Enter Your Number" />
            </div>
            <select id="months">
              <option disabled selected>
                Select a month
              </option>
              <option>JAN 2025</option>
              <option>FEB 2025</option>
              <option>MAR 2025</option>
              <option>APR 2025</option>
              <option>MAY 2025</option>
              <option>JUN 2025</option>
              <option>JUL 2025</option>
              <option>AUG 2025</option>
              <option>SEP 2025</option>
              <option>OCT 2025</option>
              <option>NOV 2025</option>
              <option>DEC 2025</option>
            </select>

            <button className="queary-btn">Get Free Quotes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

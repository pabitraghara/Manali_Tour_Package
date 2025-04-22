import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import testimonials from "./Testimonials";


const Hotels = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="Hotels" className="testimonials">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="hotel-card">
            <div>
              <img src={item.image} alt={item.name || "Hotel"} />
            </div>
            <div className="hotel-info">
              <div className="name-address">
                <h6>{item.name}</h6>
                <p>{item.address}</p>
              </div>
              <div className="price">
                <div className="ratings">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                </div>
                <p>₹ {item.price}</p>
                <p className="night">per night</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hotels;



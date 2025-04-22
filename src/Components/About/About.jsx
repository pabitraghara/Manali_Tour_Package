import React from "react";
import "./About.css";

const packages = [
  {
    name: "Hotel Vintage, Manali - Volvo Package",
    price: "Rs 7,199",
    nights: "4 Nights",
    inclusions: "Meals , Accommodation , Transfer , Sightseeing",
  },
  {
    name: "Misty Manali",
    price: "Rs 5,999",
    nights: "3 Nights",
    inclusions: "Meals , Accommodation , Transfer , Sightseeing",
  },
  {
    name: "Hadimba Retreat, Manali - Volvo Package",
    price: "Rs 7,199",
    nights: "4 Nights",
    inclusions: "Meals , Accommodation , Transfer , Sightseeing",
  },
  {
    name: "Mesmerising Manali Package",
    price: "Rs 6,999",
    nights: "4 Nights",
    inclusions: "Meals , Accommodation , Transfer , Sightseeing",
  },
  {
    name: "Mesmerizing Shimla Manali - Standard",
    price: "Rs 16,799",
    nights: "5 Nights",
    inclusions: "Meals , Accommodation , Transfer , Sightseeing",
  },
];

const About = () => {
  const handleViewDetails = (pkg) => {
    alert(`Viewing details for: ${pkg.name}`);
  };

  return (
    <section id="about" className="offer-section">
      <div className="package">
        <h5>Popular Manali Tour Packages</h5>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Manali Packages</th>
                <th>Price (Per person on twin sharing)</th>
                <th>Nights</th>
                <th>Inclusions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, index) => (
                <tr key={index}>
                  <td>{pkg.name}</td>
                  <td>{pkg.price}</td>
                  <td>{pkg.nights}</td>
                  <td>{pkg.inclusions}</td>
                  <td>
                    <button onClick={() => handleViewDetails(pkg)}>
                      VIEW DETAILS
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default About;

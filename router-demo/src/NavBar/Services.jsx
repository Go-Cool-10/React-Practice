import React from "react";
import { Link } from "react-router-dom";

const Services = ({ services }) => {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        {services.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;

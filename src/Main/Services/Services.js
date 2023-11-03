import React from "react";
import "./Services.css";
import ServicesItem from "./ServicesItem";

export default function Services() {
  return (
    <div className="services-container">
      <h3>خدمات</h3>
      <h1>خدمات ما را بررسی کنید</h1>
      <div className="services-box-container">
        <div className="services-box-row">
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
        </div>
        <div className="services-box-row">
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
        </div>
      </div>
    </div>
  );
}

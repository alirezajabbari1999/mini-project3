import React from "react";
import "./Testimonials.css";
import testimonialsImg from "../../Images/testimonials-4.jpg";

export default function Testimonials() {
  return (
    <div className="testimonials-background">
      <div className="testimonials-container">
      <img src={testimonialsImg} alt="" />
      <h2>مت براندن</h2>
      <span>فریلنسر</span>
      <p>
        زیرا من آن کسی بودم که از درد رهایی می یافت ، درد هیچ تقصیری از بسیاری
        ندارد ، حداقل فوجیات را حداقل از طریق درد ، کار می کند.{" "}
      </p>
      </div>
    </div>
  );
}

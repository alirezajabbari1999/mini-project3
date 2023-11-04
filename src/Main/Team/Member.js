import React from "react";
import "./Member.css";
import memberImg from "../../Images/team-4.jpg";

export default function Member() {
  return (
    <div className="member-container">
      <div className="img-box">
        <img src={memberImg} alt="" />
        <div className="social-icons">
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      <h4>آماندا جپسون</h4>
      <span>حسابدار</span>
    </div>
  );
}

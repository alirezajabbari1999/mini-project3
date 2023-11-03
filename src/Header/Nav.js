import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav-background">
      <div className="nav-container">
        <div className="logo-box">
          {/* <img src="../src/Images/logo.png" alt="" /> */}
          <span>KASUKA</span>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a className="active" href="" >خانه</a>
            </li>
            <li>
              <a href="">درباره ما</a>
            </li>
            <li>
              <a href="">خدمات</a>
            </li>
            <li>
              <a href="">نمونه کارها</a>
            </li>
            <li>
              <a href="">تیم</a>
            </li>
            <li>
              <a href="">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div className="nav-btn">
          <a href="#">شروع</a>
        </div>
      </div>
    </div>
  );
}

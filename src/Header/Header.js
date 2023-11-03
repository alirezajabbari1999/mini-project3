import React from "react";
import "./Header.css";
import Nav from "./Nav";
import Box from "./Box";

export default function Header() {
  return (
    <div className="header-container">
      <Nav />
      <div className="header-title-box">
        <div className="header-title">
          <h1>راه حل های قدرتمند دیجیتال با</h1>
          <span className="kasuka-name">Kasuka</span>
          <span className="desc">
            ما تیمی از بازاریابان با استعداد دیجیتال هستیم
          </span>
        </div>
        <div className="header-boxes">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </div>
  );
}

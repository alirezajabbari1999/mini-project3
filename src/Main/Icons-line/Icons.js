import React from "react";
import "./Icons.css";
import img1 from "../../Images/client-1.png";
import img2 from "../../Images/client-2.png";
import img3 from "../../Images/client-3.png";
import img4 from "../../Images/client-4.png";
import img5 from "../../Images/client-7.png";
import img6 from "../../Images/client-8.png";

export default function Icons() {
  return (
    <div className="icons-container">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
  );
}

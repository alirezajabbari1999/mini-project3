import React from "react";
import './FeturedItem.css'

export default function FeturedItem() {
  return (
    <div className="fetured-item-container">
      <div className="icon-box">
        <span>
          <i class="fa-solid fa-cube"></i>
        </span>
      </div>
      <div className="text-box">
        <h3>کدام یک از اینهاست</h3>
        <p>
          کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود
          را رها کرده اند
        </p>
      </div>
    </div>
  );
}

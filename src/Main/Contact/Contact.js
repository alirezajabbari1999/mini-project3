import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h3>تماس با ما</h3>
      <h1>با ما تماس بگیرید</h1>
      <div className="contact-box">
        <div className="info">
          <div className="info-item">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <span className="title">مکان:</span>
              <span className="address">تهران خیابان آزادی</span>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <span className="title">ایمیل:</span>
              <span className="address">info@example.com</span>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <span className="title">شماره تماس:</span>
              <span className="address">0123456789</span>
            </div>
          </div>
        </div>
        <div className="form-box">
          <form action="">
            <div className="name-input-container">
              <input type="text" placeholder="نام" />
              <input type="email" placeholder="ایمیل" />
            </div>
            <input className="title" type="text" placeholder="عنوان" />
            <textarea placeholder="پیام" name="" id="" cols="30" rows="5"></textarea>
            <button className="submit-btn" type="submit">ارسال پیام</button>
          </form>
        </div>
      </div>
    </div>
  );
}

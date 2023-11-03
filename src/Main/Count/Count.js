import React from "react";
import "./Count.css";
import countImg from "../../Images/counts-img.jpg";

export default function Count() {
  return (
    <div className="count-container">
      <div className="count-img-box">
        <img src={countImg} alt="" />
      </div>
      <div className="count-text-box">
        <h1>شایسته ترین لذت را به هر حال ارائه می دهد</h1>
        <p>
          خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به
          آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است
        </p>
        <div className="item-box">
          <div className="row">
            <div className="item">
              <span className="icon-box">
                <i class="fa-regular fa-face-smile"></i> 65
              </span>
              <span className="desc">
                مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.
              </span>
            </div>
            <div className="item">
              <span className="icon-box">
                <i class="fa-regular fa-face-smile"></i> 65
              </span>
              <span className="desc">
                مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.
              </span>
            </div>
          </div>
          <div className="row">
            <div className="item">
              <span className="icon-box">
                <i class="fa-regular fa-face-smile"></i> 85
              </span>
              <span className="desc">
                مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.
              </span>
            </div>
            <div className="item">
              <span className="icon-box">
                <i class="fa-regular fa-face-smile"></i> 85
              </span>
              <span className="desc">
                مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

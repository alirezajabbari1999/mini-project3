import React from "react";
import "./Gallery.css";
import GalleryImg1 from "../../Images/portfolio-1.jpg";
import GalleryImg2 from "../../Images/portfolio-2.jpg";
import GalleryImg3 from "../../Images/portfolio-3.jpg";
import GalleryImg4 from "../../Images/portfolio-4.jpg";
import GalleryImg5 from "../../Images/portfolio-5.jpg";
import GalleryImg6 from "../../Images/portfolio-6.jpg";
import GalleryImg7 from "../../Images/portfolio-7.jpg";
import GalleryImg8 from "../../Images/portfolio-8.jpg";
import GalleryImg9 from "../../Images/portfolio-9.jpg";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <h3>نمونه کارها</h3>
      <h1>نمونه کارها ما را بررسی کنید</h1>
      <ul>
        <li className="li-active">
          <a href="">همه</a>
        </li>
        <li>
          <a href="">برنامه</a>
        </li>
        <li>
          <a href="">محصول</a>
        </li>
        <li>
          <a href="">اینترنت</a>
        </li>
      </ul>
      <div className="gallery-images">
        <div className="column">
          <div className="item">
            <img src={GalleryImg3} alt="" />
            <div className="content">
              <div className="spans">
                <span className="span1">برنامه 1</span>
                <span className="span2">برنامه</span>
                <span className="span3">
                  <i class="fa-solid fa-link"></i>
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={GalleryImg5} alt="" />
            <div className="content">
              <div className="spans">
                <span className="span1">برنامه 1</span>
                <span className="span2">برنامه</span>
                <span className="span3">
                  <i class="fa-solid fa-link"></i>
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={GalleryImg9} alt="" />
            <div className="content">
              <div className="spans">
                <span className="span1">برنامه 1</span>
                <span className="span2">برنامه</span>
                <span className="span3">
                  <i class="fa-solid fa-link"></i>
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="item">
            <img src={GalleryImg2} alt="" />
            <div className="content">
              <div className="spans">
                <span className="span1">برنامه 1</span>
                <span className="span2">برنامه</span>
                <span className="span3">
                  <i class="fa-solid fa-link"></i>
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={GalleryImg4} alt="" />
            <div className="content">
              <div className="spans">
                <span className="span1">برنامه 1</span>
                <span className="span2">برنامه</span>
                <span className="span3">
                  <i class="fa-solid fa-link"></i>
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={GalleryImg7} alt="" />
            <div className="content">
              <div className="spans">
                <span className="span1">برنامه 1</span>
                <span className="span2">برنامه</span>
                <span className="span3">
                  <i class="fa-solid fa-link"></i>
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={GalleryImg8} alt="" />
            <div className="content">
              <div className="spans">
                <span className="span1">برنامه 1</span>
                <span className="span2">برنامه</span>
                <span className="span3">
                  <i class="fa-solid fa-link"></i>
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="item">
            <img src={GalleryImg1} alt="" />
            <div className="content">
              <div className="spans">
                <span className="span1">برنامه 1</span>
                <span className="span2">برنامه</span>
                <span className="span3">
                  <i class="fa-solid fa-link"></i>
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={GalleryImg6} alt="" />
            <div className="content">
              <div className="spans">
                <span className="span1">برنامه 1</span>
                <span className="span2">برنامه</span>
                <span className="span3">
                  <i class="fa-solid fa-link"></i>{" "}
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

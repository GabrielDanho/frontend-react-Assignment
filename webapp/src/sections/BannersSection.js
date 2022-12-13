import React from "react";
import image1 from "../assets/images/img1.svg";
import image2 from "../assets/images/img2.svg";

const BannersSection = () => {
  return (
    <section class="container banner-section">
    <div className="row my-5 justify-content-center">
      <div className="col-5 banner-section-background-one row">
          <div className="col-5">
            <img></img>
          </div>
          <div className="col-7">
            <h1>Pamela Reif's</h1>
            <h1 className="textUnder">Top Picks</h1>
            <a className="btnBanner-theme" href="#">
              <span className="corner-left"></span>
              SHOP NOW
              <span className="corner-right"></span>
            </a>
          </div>
      </div>
      <div className="col-5 banner-section-background-two row">
          <div className="col-7">
            <h1>Let's Be</h1>
            <h1>Conscious</h1>
            <a className="btnBanner-theme" href="#">
              <span className="corner-left"></span>
              SHOP NOW
              <span className="corner-right"></span>
            </a>
          </div>
          <div className="col-5">
            <img></img>
          </div>
      </div>
    </div>
  </section>
  )
}

export default BannersSection;

import React from "react";
import img1 from "../assets/images/placeholder-female-sitting.svg";
import img2 from "../assets/images/placeholder-male-sitting.svg";
import NavSection from "./NavSection";

const HeaderSection = () => {
  return (
    <header className="__gradinent-gray">
      <NavSection />

      <section className="__showcase container">
        <div className="row">
          <div className="col-3">
            <img
              src={img1}
              className="_header-image"
              alt="placeholder-female-sitting"
            />
          </div>
          <div className="col m-auto text-center">
            <h1 className="_text-bold">SALE UP</h1>
            <h1 className="_text-bold">To 50% Off</h1>
            <p className="_btn-margin">
              Online shopping free home delivery over $100
            </p>
            <a className="__btn-theme" href="#">
              <span className="__btn-theme-left"></span>
              SHOP NOW
              <span className="__btn-theme-right"></span>
            </a>
          </div>
          <div className="col-3">
            <img
              src={img2}
              className="_header-image"
              alt="placeholder-male-sitting"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeaderSection;

import React from "react";
import { NavLink } from "react-router-dom";  

const NavSection = () => {
  return (
    <nav className="__navbar container">
      <div className="__logo">Fixxo.</div>
      <div className="__nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>
      <div className="__nav-icon-links">
        <a href="#">
          <i className="fa-regular fa-magnifying-glass"></i>
        </a>
        <a href="#">
          <i className="fa-regular fa-code-compare"></i>
        </a>
        <a href="#">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">
            1
          </span>
          <i className="fa-regular fa-heart"></i>
        </a>
        <a href="#">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">
            3
          </span>
          <i className="fa-regular fa-bag-shopping"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavSection;

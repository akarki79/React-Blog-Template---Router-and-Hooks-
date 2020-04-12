import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">BLOG NAME</NavLink>
    </div>
  );
};

export default Logo;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

import SearchIcon from "../../assets/icons/icon-search.png";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Submitted");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img
            onClick={openSearch}
            className="searchIcon"
            src={SearchIcon}
            alt="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;

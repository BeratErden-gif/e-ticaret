import React from "react";
import logo from "../../assets/logo.svg";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="OJS Nutrition" className="logo" />
        <div className="nav-links">
          <a href="#" className="nav-link">
            Kategoriler
          </a>
          <a href="#" className="nav-link">
            Kampanyalar
          </a>
          <a href="#" className="nav-link">
            Blog
          </a>
        </div>
        <div className="nav-right">
          <SearchBar />
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

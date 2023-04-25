import React, { useState } from "react";
import "./Header.css"; // or "./Header.scss" if using Sass

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="nav-container">
          <div className="logo-container">
            <div className="logo">YourLogo</div>
          </div>
          <div className={`nav ${navVisible ? "visible" : ""}`}>
            <a href="#">Home</a>
            <a href="#">House Types</a>
            <a href="#">Locations</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
          <button
            className="dropdown"
            onClick={() => setNavVisible(!navVisible)}
          >
            ☰
          </button>
        </div>
        <div className={`orders ${navVisible ? "visible" : ""}`}>
          <a href="#">Orders</a>
        </div>
      </div>
      <div className="header-content">
        <h1>Your Company Name</h1>
        <h2>Building Your Dream Home</h2>
      </div>
    </header>
  );
};

export default Header;

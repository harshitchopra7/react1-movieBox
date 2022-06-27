import React from "react";
import "./Navbar.css";
import navbar from "../../images/navbar/logo.png";

function Navbar() {
  return (
    <div className="navbar_container">
      <img className="navbar_logo" src={navbar} alt="logo" />
      <button className="navbar_button">Sign In</button>
    </div>
  );
}

export default Navbar;

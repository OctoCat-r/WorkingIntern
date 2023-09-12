// src/Navbar.js
import React from "react";
import company from "./assets/company.svg";
import home from "./assets/home.svg";
import about from "./assets/about.svg";
import phone from "./assets/phone.svg";
import search from "./assets/search.svg";
import testimonal from "./assets/testimonal.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={company} />
      </div>
      <div className="search-bar">
        <div className="search">
          <img src={search} alt="Home Icon" />
          {/* Search */}
        </div>
      </div>
      
      <div className="icons">
        <div className="icon">
          <img src={home} alt="Home Icon" />
          <div className="home">Home</div>
        </div>

        <div className="icon">
          <img src={phone} alt="Contact Icon" />
          <div className="contact">Contact</div>
        </div>
        <div className="icon">
          <img src={about} alt="About Icon" />
          <div className="about">about</div>
        </div>

        <div className="icon">
          <img src={testimonal} alt="Testimonal Icon" />
          <div className="testimonals">Testimonals</div>
        </div>

        <div className="icon">
          <img src={phone} alt="Event  Icon" />
          <div className="events">Events</div>
        </div>
        <div className="icon">
          <img src={about} alt="About Icon" />
          <div className="mentorship">Mentorship</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

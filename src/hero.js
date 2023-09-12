// src/Navbar.js
import React from "react";
import hero from "./assets/hero.svg";
import "./hero.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="text">
        Give The Best Start to Your <span className="span">Career</span>
      </div>

      <div className="smaller-text">
        What is Think<span className="span">Wht?</span>
      </div>
      <div className="smallest-text">
        Thinkwht is an innovative and user-friendly educational course website
        that aims to empower learners of all ages and backgrounds with a diverse
        range of knowledge and skills. The platform is designed to provide a
        seamless and enriching learning experience through its wide array of
        courses, catering to various subjects and disciplines.
      </div>
      <div className="training"></div>
      <div className="curves-container">
        <div className="curve"></div>
        <div className="curve1"></div>
        <div className="curve2"></div>
        <div className="curve3"></div>
      </div>
      <img src={hero} alt="Right Image" className="right-image" />
      {/* Your other content goes here */}
    </div>
  );
}

export default HeroSection;

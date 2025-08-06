import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site__footer">
      <div className="footer__container">
        <ul className="footer__nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#services">Services</a></li>
          {/* <li><a href="#resume">Resume</a></li> */}
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <li><a href="#blog">Blog</a></li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>

        <p className="footer__text">© 2025 Diksha Kushawaha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

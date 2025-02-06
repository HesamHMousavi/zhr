import React from "react";
import Logo from "../../Imgs/zhr-logo.jpeg";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          className="lit-webs"
          target="_blank"
          rel="noopener noreferrer"
          href="https://litwebs.co.uk"
        >
          Made by litwebs.co.uk
        </a>
        <div className="footer-section">
          <img src={Logo} alt="" className="logo-footer" />
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a
              href="https://www.tiktok.com/@zhr.nails_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTiktok className="icon-soc" />
            </a>
            <a
              href="https://www.instagram.com/zhr.nails_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon-soc" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 GlamNails. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Logo from "../../Imgs/zhr-logo.jpeg";
import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg-pink">
      <div className="max-width">
        <div className="header">
          <img src={Logo} alt="" />
          <div className="links">
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
        </div>
      </div>
    </div>
  );
};

export default Header;

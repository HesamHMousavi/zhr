import React from "react";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import Img from "../../Imgs/b2.png";
import Img1 from "../../Imgs/b3.png";
import "./SocialBanner.css";

const SocialBanner = () => {
  return (
    <div className="social-bg">
      <div className="max-width">
        <div className="social-banner">
          <img src={Img} alt="Background" />
          
          {/* Instagram */}
          <div className="center">
            <a href="https://www.instagram.com/zhr.nails_/" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={120} className="bg-icon" />
            </a>
            <a href="https://www.instagram.com/zhr.nails_/" target="_blank" rel="noopener noreferrer">
              <h3>@zhr.nails_</h3>
            </a>
          </div>

          {/* TikTok */}
          <div className="center">
            <a href="https://www.tiktok.com/@zhr.nails_" target="_blank" rel="noopener noreferrer">
              <BsTiktok size={120} className="bg-icon" />
            </a>
            <a href="https://www.tiktok.com/@zhr.nails_" target="_blank" rel="noopener noreferrer">
              <h3>@zhr.nails_</h3>
            </a>
          </div>

          <img src={Img1} alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;

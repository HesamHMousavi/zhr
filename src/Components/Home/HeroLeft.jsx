import React from "react";
import nails1 from "../../Imgs/nails4.jpg";
import "./Hero.css";

const HeroLeft = () => {
  return (
    <div className="hero">
      <div className="text-item">
        <h1>Why Choose ZHR Nails?</h1>
        <p>
          Custom nail art & trending designs Relaxing, friendly service in a
          cozy atmosphere Affordable luxury—because you deserve the best!
        </p>
      </div>
      <div className="img-item">
        <img src={nails1} alt="" />
      </div>
    </div>
  );
};

export default HeroLeft;

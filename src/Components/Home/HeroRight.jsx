import React from "react";
import nails2 from "../../Imgs/nails3.jpg";
import "./Hero.css";

const HeroRight = () => {
  return (
    <div className="hero reverse">
      <div className="img-item">
        <img src={nails2} alt="" />
      </div>
      <div className="text-item">
        <h1>About ZHR</h1>
        <p>
          At ZHR Nails, I believe that beautiful nails are more than just a
          look—they're an expression of your personality! Whether you love
          classic elegance, bold designs, or intricate nail art, we’ve got you
          covered.
        </p>
      </div>
    </div>
  );
};

export default HeroRight;

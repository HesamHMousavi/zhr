import React from "react";
import "./LandImg.css";
import landingImg from "../../Imgs/landing-long.png";

const LandImg = () => {
  return (
    <div className="landing-img">
      <img src={landingImg} alt="" />
    </div>
  );
};

export default LandImg;

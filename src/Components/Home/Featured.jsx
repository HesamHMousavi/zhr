import React from "react";
import IMG_1 from "../../Imgs/nails5.jpg";
import IMG_2 from "../../Imgs/nails6.jpg";
import IMG_3 from "../../Imgs/nails7.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="bg-cream">
      <div className="max-width">
        <h1 className="featured-title">Featured</h1>
        <div className="featured">
          <div className="item">
            <img src={IMG_1} alt="" />
            <h3>Title</h3>
          </div>
          <div className="item">
            <img src={IMG_2} alt="" />
            <h3>Title</h3>
          </div>
          <div className="item">
            <img src={IMG_3} alt="" />
            <h3>Title</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

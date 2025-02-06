import React from "react";
import Img1 from "../../Imgs/real1.jpg";
import Img2 from "../../Imgs/real2.jpg";
import Img3 from "../../Imgs/real3.jpg";
import Img4 from "../../Imgs/real4.jpg";
import Img5 from "../../Imgs/real5.jpg";
import Img6 from "../../Imgs/real6.jpg";
import "./ImgGrid.css";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const ImgGrid = () => {
  return (
    <div className="grid-container">
      <div className="img-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Grid ${index}`} />
        ))}
      </div>
      <div className="grid-overlay">
        <h3>Get in Touch</h3>
        <p>Have a question or ready to book your next nail appointment? <br/> I'd love to hear from you</p>
      </div>
    </div>
  );
};

export default ImgGrid;

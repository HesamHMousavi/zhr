import React, { useEffect, useRef, useState } from "react";
import "./Featured.css";
import img1 from "../../../Images/IMG25.jpeg";
import img2 from "../../../Images/IMG1.jpg";
import img3 from "../../../Images/IMG29.jpeg";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const nav = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="featured-container" id="featured">
      <h2 className="featured-title">Featured work</h2>
      <div className="featured-gallery">
        <div
          className={`featured-item ${
            isVisible ? `fade-in delay-0-1` : "fade-out"
          }`}
        >
          <div className="featured-frame">
            <img src={img1} alt={`Nail Design`} />
          </div>
          <p className="featured-description">
            Nail art featured in 'Come As You Really Are' exhibition
          </p>
        </div>
        <div
          className={`featured-item ${
            isVisible ? `fade-in delay-1-1` : "fade-out"
          }`}
        >
          <div className="featured-frame">
            <img src={img2} alt={`Nail Design`} />
          </div>
          <p className="featured-description">
            Becca Cooke's nails, designed for the prestigious PFA awards
          </p>
        </div>
        <div
          className={`featured-item ${
            isVisible ? `fade-in delay-2-1` : "fade-out"
          }`}
        >
          <div className="featured-frame">
            <img src={img3} alt={`Nail Design`} />
          </div>
          <p className="featured-description">
            Featured on BBC News, celebrating creativity in nail art
          </p>
        </div>
      </div>

      {/* <button className="featured-button" onClick={() => nav("/gallery")}>
        Gallery
      </button> */}
    </div>
  );
};

export default Featured;

import React, { useEffect, useRef, useState } from "react";
import "./Featured.css";
import img1 from "../../../Images/IMG10.jpg";
import img2 from "../../../Images/IMG11.jpg";
import img3 from "../../../Images/IMG12.jpg";
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
        {[img1, img2, img3].map((img, index) => (
          <div
            key={index}
            className={`featured-item ${
              isVisible ? `fade-in delay-${index}-1` : "fade-out"
            }`}
          >
            <div className="featured-frame">
              <img src={img} alt={`Nail Design ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <p className="featured-description">
        <em>
          Becca Cooke’s stunning nails, designed for the prestigious PFA Awards
        </em>
      </p>

      <button className="featured-button" onClick={() => nav("/gallery")}>
        Gallery
      </button>
    </div>
  );
};

export default Featured;

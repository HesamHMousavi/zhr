import React, { useEffect, useRef, useState } from "react";
import "./Press.css";
import img1 from "../../../Images/IMG11.jpg"; // Replace with actual image paths
import img2 from "../../../Images/IMG13.jpg";
import img3 from "../../../Images/IMG16.jpg";
import { useNavigate } from "react-router-dom";

const Press = () => {
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

  const images = [img1, img2, img3];

  return (
    <div ref={sectionRef} className="press-section">
      <h2 className={`press-title ${isVisible ? "animate-in" : "animate-out"}`}>
        CUSTOM PRESS ON NAILS
      </h2>

      <div className="press-gallery">
        {images.map((img, index) => (
          <div
            key={index}
            className={`press-item ${
              isVisible ? `animate-in delay-${index}` : "animate-out"
            }`}
          >
            <img src={img} alt={`Press-On Nails ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="press-btn" onClick={() => nav("/contact")}>
        Book now
      </button>
    </div>
  );
};

export default Press;

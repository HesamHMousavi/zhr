import React, { useEffect, useRef, useState } from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import img from "../../../Images/IMG7.jpg"; // Replace with actual image path

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const nav = useNavigate();
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
    <div ref={sectionRef} className="services-section">
      <div className="services-container">
        <div
          className={`services-text ${
            isVisible ? "animate-in-left" : "animate-out-left"
          }`}
        >
          <h2>Services Offered</h2>
          <ul>
            <li>Acrylics</li>
            <li>Gels</li>
            <li>Manicures</li>
            <li>Gel-X</li>
            <li className="tt" onClick={() => nav("/press-ons")}>
              Press-ons
            </li>
          </ul>
        </div>
        <div
          className={`services-image ${
            isVisible ? "animate-in-right" : "animate-out-right"
          }`}
        >
          <img src={img} alt="Nail Art Services" />
        </div>
      </div>
    </div>
  );
};

export default Services;

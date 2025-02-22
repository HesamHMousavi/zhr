import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import img from "../../../Images/IMG13.jpg"; // Replace with actual image path

const Hero = () => {
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
    <div ref={sectionRef} className="nail-section">
      <div className="nail-container">
        <div
          className={`nail-image ${
            isVisible ? "animate-in-left" : "animate-out-left"
          }`}
        >
          <img src={img} alt="Nail Design" />
        </div>
        <div
          className={`nail-text ${
            isVisible ? "animate-in-right delay" : "animate-out-right"
          }`}
        >
          <h2>NAIL IT EVERYTIME</h2>
          <p>Book your consultation</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

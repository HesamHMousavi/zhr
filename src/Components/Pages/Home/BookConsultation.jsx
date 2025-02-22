import React, { useEffect, useRef, useState } from "react";
import "./BookConsultation.css";
import img1 from "../../../Images/IMG20.jpg"; // Replace with actual image paths
import img2 from "../../../Images/IMG21.jpg";
import img3 from "../../../Images/IMG22.jpg";
import { useNavigate } from "react-router-dom";

const BookConsultation = () => {
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
    <div ref={sectionRef} className="consultation-container">
      <h2 className="consultation-title">Ready to transform your nails?</h2>
      <p className="consultation-subtitle">
        Book a consultation to discuss your nail care needs
      </p>

      <div className="image-gallery">
        {[img1, img2, img3].map((img, index) => (
          <div
            key={index}
            className={`image-wrapper ${
              isVisible ? `animate-in delay-${index}` : "animate-out"
            }`}
          >
            <img src={img} alt={`Nail Design ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        className={`orange-btn ${
          isVisible ? "animate-in delay-3" : "animate-out"
        }`}
        onClick={() => nav("/contact")}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookConsultation;

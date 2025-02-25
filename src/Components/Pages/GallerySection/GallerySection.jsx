import React, { useEffect, useRef, useState } from "react";
import "./GallerySection.css";
import { useNavigate } from "react-router-dom";
// import img0 from "../../../Images/IMG0.jpeg";
import img3 from "../../../Images/IMG3.jpg";
import img5 from "../../../Images/IMG5.jpg";
import img7 from "../../../Images/IMG7.jpg";
import img8 from "../../../Images/IMG8.jpg";
import img9 from "../../../Images/IMG9.jpg";
import img10 from "../../../Images/IMG10.jpg";
import img11 from "../../../Images/IMG11.jpg";
import img12 from "../../../Images/IMG12.jpg";
import img13 from "../../../Images/IMG13.jpg";
import img14 from "../../../Images/IMG14.jpg";
import img15 from "../../../Images/IMG15.jpg";
import img16 from "../../../Images/IMG16.jpg";
import img17 from "../../../Images/IMG17.jpg";
import img18 from "../../../Images/IMG18.jpg";
import img19 from "../../../Images/IMG19.jpg";
import img20 from "../../../Images/IMG20.jpg";
import img21 from "../../../Images/IMG21.jpg";
import img22 from "../../../Images/IMG22.jpg";
import img23 from "../../../Images/IMG23.jpg";

const GallerySection = () => {
  const nav = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const images = [
    // img29,
    // img28,
    // img27,
    // img26,
    // img25,
    // img24,
    img23,
    img22,
    img21,
    img20,
    img19,
    img18,
    img17,
    img16,
    img15,
    img14,
    img13,
    img12,
    img11,
    img10,
    img9,
    img8,
    img7,
    // img6,
    img5,
    // img4,
    img3,
  ];

  return (
    <div ref={sectionRef} className="gallery-section">
      <h2 className="gallery-title">GALLERY</h2>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div
            key={index}
            className={`gallery-item ${
              isVisible ? `animate-in delay-${index % 10}` : "animate-out"
            }`}
          >
            <div className="frame">
              <img src={src} alt={`Gallery Image ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <button
        className="orange-btn"
        style={{ marginTop: "3rem" }}
        onClick={() => nav("/contact")}
      >
        Book now
      </button>
    </div>
  );
};

export default GallerySection;

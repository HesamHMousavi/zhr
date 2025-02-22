import React, { useEffect, useRef, useState } from "react";
import "./GallerySection.css";
import img1 from "../../../Images/IMG1.jpg";
import img2 from "../../../Images/IMG2.jpg";
import img3 from "../../../Images/IMG3.jpg";
import img4 from "../../../Images/IMG4.jpg";
import img5 from "../../../Images/IMG5.jpg";
import img6 from "../../../Images/IMG6.jpg";
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
import { useNavigate } from "react-router-dom";

const GallerySection = () => {
  const nav = useNavigate()
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
    { src: img1, size: "extra-large" },
    { src: img5, size: "tiny" },
    { src: img3, size: "large" },
    { src: img4, size: "large" },
    { src: img19, size: "small" },
    { src: img6, size: "small" },
    { src: img7, size: "tiny" },
    { src: img8, size: "tiny" },
    { src: img9, size: "tiny" },
    { src: img10, size: "tiny" },
    { src: img11, size: "large" },
    { src: img12, size: "extra-large" },
    { src: img13, size: "small" },
    { src: img14, size: "small" },
    { src: img15, size: "tiny" },
    { src: img16, size: "extra-large" },
    { src: img17, size: "large" },
    { src: img18, size: "large" },
    { src: img19, size: "large" },
    { src: img20, size: "large" },
    { src: img1, size: "large" },
  ];

  return (
    <div ref={sectionRef} className="gallery-section">
      <div className="gallery-container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`gallery-item ${img.size} ${
              isVisible ? `animate-in delay-${index}` : "animate-out"
            }`}
          >
            <div className="frame">
              <img src={img.src} alt={`Gallery Image ${index + 1}`} />
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

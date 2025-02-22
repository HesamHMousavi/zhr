import React, { useEffect, useRef } from "react";
import "./ImageGrid.css";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../../Images/IMG1.jpg";
import img2 from "../../../Images/IMG10.jpg";
import img3 from "../../../Images/IMG12.jpg";

const ImageGrid = () => {
  const nav = useNavigate();
  const gridRef = useRef(null);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const gridElement = gridRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 30% of the component is visible
    );

    if (gridElement) {
      const items = gridElement.querySelectorAll(".image-card");
      items.forEach((item) => observer.observe(item));

      return () => items.forEach((item) => observer.unobserve(item));
    }
  }, []);

  return (
    <div className="image-grid" ref={gridRef}>
      <div className="image-card">
        <div className="image-container">
          <img src={img1} alt="Times Recognised Artist" />
          <div className="overlay-text">TIMES RECOGNISED ARTIST</div>
        </div>
        <button
          className="orange-btn"
          onClick={() => scrollToSection("featured")}
        >
          Featured Work
        </button>
      </div>

      <div className="image-card">
        <div className="image-container">
          <img src={img2} alt="Showcasing Creativity" />
          <div className="overlay-text">SHOWCASING CREATIVITY</div>
        </div>
        <button className="orange-btn" onClick={() => nav("/gallery")}>
          Gallery
        </button>
      </div>

      <div className="image-card">
        <div className="image-container">
          <img src={img3} alt="Custom Press On Designs" />
          <div className="overlay-text">CUSTOM PRESS ON DESIGNS</div>
        </div>
        <button className="orange-btn" onClick={() => nav("/press-ons")}>
          Press Ons
        </button>
      </div>
    </div>
  );
};

export default ImageGrid;

import React, { useEffect, useRef } from "react";
import IMG from "../../../Images/IMG24.jpeg";
import "./ImagePreview.css";

const ImagePreview = () => {
  const previewRef = useRef(null);

  useEffect(() => {
    const previewElement = previewRef.current;

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
      { threshold: 0.1 } // Trigger when 30% of the component is visible
    );

    if (previewElement) {
      observer.observe(previewElement);

      return () => observer.unobserve(previewElement);
    }
  }, []);

  return (
    <div className="image-preview" ref={previewRef}>
      <img src={IMG} alt="Preview" className="preview-image" />
      <div className="overlay-text">Introducing ZHR</div>
    </div>
  );
};

export default ImagePreview;

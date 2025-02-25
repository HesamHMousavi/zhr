import React, { useEffect, useRef, useState } from "react";
import "./Steps.css";

const Steps = () => {
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
    <div ref={sectionRef} className="steps-section">
      <div className="overlay">
        <h1 className="get-in">GET IN TOUCH</h1>
      </div>
      <div className="steps-container"></div>
    </div>
  );
};

export default Steps;

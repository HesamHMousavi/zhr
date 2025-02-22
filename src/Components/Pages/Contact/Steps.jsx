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
      <div className="overlay"></div> {/* Dark overlay */}
      <div className="steps-container">
        <div
          className={`step step-one ${
            isVisible ? "animate-in delay-0" : "animate-out"
          }`}
        >
          <h2>Step One</h2>
          <p>Fill out the form below with your details and nail inspiration</p>
        </div>

        <div
          className={`step step-two ${
            isVisible ? "animate-in delay-1" : "animate-out"
          }`}
        >
          <h2>Step Two</h2>
          <p>Fill out the form below with your details and nail inspiration</p>
        </div>

        <div
          className={`step step-three ${
            isVisible ? "animate-in delay-2" : "animate-out"
          }`}
        >
          <h2>Step Three</h2>
          <p>Fill out the form below with your details and nail inspiration</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;

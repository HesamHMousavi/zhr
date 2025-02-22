import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { FaUserAlt } from "react-icons/fa";
import { BsLightbulb } from "react-icons/bs";
import { GiNailedFoot } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";

const AboutSection = () => {
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
    <div ref={sectionRef} className="about-container">
      <div className="inter">
        <h2 className="about-title">About Me</h2>
        <div className="about-grid">
          {[
            { icon: <FaUserAlt />, text: "I'm Zahra, a self-taught nail artist." },
            { icon: <BsLightbulb />, text: "Nails are my passion and creative outlet." },
            { icon: <GiNailedFoot />, text: "I’ve mastered my craft through dedication." },
            { icon: <FaBookOpen />, text: "I love creating designs that tell a story." },
          ].map((item, index) => (
            <div
              key={index}
              className={`about-item ${isVisible ? `animate-in delay-${index}` : "animate-out"}`}
            >
              <div className="about-icon">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

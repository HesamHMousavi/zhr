import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer-container ${isVisible ? "animate-in" : "animate-out"}`}
    >
      <div className="footer-content">
        <div className="footer-left">
          <h2>Contact Me</h2>
          <p>Feel free to drop an email or leave a message</p>

          <div className="footer-item">
            <FaEnvelope className="footer-icon" />
            <p>ZHREMAIL@EMAIL.Co.Uk</p>
          </div>

          <div className="footer-item">
            <FaPhone className="footer-icon" />
            <p>01274 576 908</p>
          </div>
        </div>

        <div className="footer-right">
          <h3>The Colour Studio Manchester</h3>
          <p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              23, Bury Old Road <br />
              Manchester <br />
              M25 0EY
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2025 © ZHR_Nails All Rights Reserved</p>
        <div className="social-icons">
          <FaInstagram
            className="social-icon"
            onClick={() =>
              window.open("https://www.instagram.com/zhr.nails_", "_blank")
            }
          />
          <FaTiktok
            className="social-icon"
            onClick={() =>
              window.open("https://www.tiktok.com/@zhr.nails_", "_blank")
            }
          />
        </div>
        <p>
          Powered by{" "}
          <a
            target="_blank"
            href="https://litwebs.co.uk"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            Lit Webs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

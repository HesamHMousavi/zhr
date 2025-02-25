import React, { useState, useEffect } from "react";
import fullLogo from "../../Images/logo.jpg";
import smallLogo from "../../Images/logo.jpg";
import { Link } from "react-router-dom"; // Corrected import
import { useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import "./Header.css";

const Header = () => {
  const path = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to update state when resizing
    const handleResize = () => {
      if (Number(window.innerWidth) < 768) {
        setMenuOpen(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled rugged" : ""}`}>
      {/* Navigation - Main */}
      <nav className={`nav same`}>
        <Link
          to="/"
          className={` ${
            path.pathname === "/"
              ? "black-color"
              : scrolled
              ? "black-color"
              : ""
          } `}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/gallery"
          className={` ${
            path.pathname === "/"
              ? "black-color"
              : scrolled
              ? "black-color"
              : ""
          } `}
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </Link>
      </nav>
      <img
        src={scrolled ? smallLogo : fullLogo}
        alt="Oakforest Logo"
        className={`logo same${!scrolled ? "br" : "br"}`}
      />
      <CiMenuFries
        className={`menu-toggle`}
        color="#baa368"
        size={35}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <nav className={`nav same`}>
        <Link
          to="/press-ons"
          className={` ${
            path.pathname === "/"
              ? "black-color"
              : scrolled
              ? "black-color"
              : ""
          } `}
          onClick={() => setMenuOpen(false)}
        >
          Custom Press-Ons
        </Link>
        <Link
          to="/contact"
          className={` ${
            path.pathname === "/"
              ? "black-color"
              : scrolled
              ? "black-color"
              : ""
          } `}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>

      <nav className={`nav ${menuOpen ? "open" : "dis-none"} `}>
        <Link
          to="/"
          className={` ${
            path.pathname === "/"
              ? "black-color"
              : scrolled
              ? "black-color"
              : ""
          } `}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/gallery"
          className={` ${
            path.pathname === "/"
              ? "black-color"
              : scrolled
              ? "black-color"
              : ""
          } `}
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/press-ons"
          className={` ${
            path.pathname === "/"
              ? "black-color"
              : scrolled
              ? "black-color"
              : ""
          } `}
          onClick={() => setMenuOpen(false)}
        >
          Custom Press-Ons
        </Link>
        <Link
          to="/contact"
          className={` ${
            path.pathname === "/"
              ? "black-color"
              : scrolled
              ? "black-color"
              : ""
          } `}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;

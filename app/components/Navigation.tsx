import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/navigation.css";
import logo from "../assets/logo.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`navigation ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Taurel Logo" className="logo" />
           {/*  <span className="logo-text">TAUREL</span> */}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            {/* <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/sobre-nosotros">Sobre Nosotros</Link>
            </li> */}
            <li>
              <Link to="/contactanos">Contáctanos</Link>
            </li>
          </ul>
        </nav>

        {/* Special Links */}
        <div className="special-links">
          <a href="#" className="login-link">Empleo</a>
          <a href="#" className="track-link">Rastrea tu embarque</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
            </li>
          {/*   <li>
              <Link to="/servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
            </li>
            <li>
              <Link to="/sobre-nosotros" onClick={() => setMobileMenuOpen(false)}>Sobre Nosotros</Link>
            </li> */}
            <li>
              <Link to="/contactanos" onClick={() => setMobileMenuOpen(false)}>Contáctanos</Link>
            </li>
            <li>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Empleo</a>
            </li>
            <li>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>Rastrea tu embarque</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;
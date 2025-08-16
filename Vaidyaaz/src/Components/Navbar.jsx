import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTags,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaBlog
} from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/Logo.png"

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains("overlay")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isHome = location.pathname === "/";
  const navbarClass = isHome
    ? scrolled
      ? "navbar-colored navbar-scrolled"
      : "navbar-home"
    : "navbar-colored";

  return (
    <>
      {menuOpen && <div className="overlay"></div>}
      <nav className={`navbar ${navbarClass}`}>
        <div className="navbar-container">
          <div className="logo">
            <NavLink to="/" onClick={closeMenu}>
              <img src={logo} alt="Vaidyaaz" />
            </NavLink>
          </div>

          <div
            className="menu-icon"
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <NavLink to="/" onClick={closeMenu}>
                <FaHome className="nav-icon" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={closeMenu}>
                <FaTags className="nav-icon" /> Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={closeMenu}>
                <FaBlog className="nav-icon" /> Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                <FaInfoCircle className="nav-icon" /> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                <FaEnvelope className="nav-icon" /> Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2>About VAIDYAAZ</h2>
          <p>
            VAIDYAAZ specializes in advanced coating solutions for
            <strong> heat resistance, industrial durability, and long-lasting
              protection</strong>. Trusted by leading industries to deliver
            innovation and quality.
          </p>
          <div className="contact-info">
            <p><FaPhoneAlt /> +91 7397892909</p>
            <p><FaEnvelope />vaidyaaz@vaidyaaz.com</p>
            <p><FaMapMarkerAlt />A - 42 ADDL MIDC NANDGAONPETH,
              AMRAVATI, Maharashtra,
              INDIA - Pin 444901</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-section">
          <h2>Our Services</h2>
          <ul>
            <li>Coating for Radiant Tubes</li>
            <li> Coating for Boiler</li>
            <li>Coating for Oven</li>
            <li> Coating for Furnace</li>
          </ul>
        </div>

        {/* Resources */}
        {/* <div className="footer-section">
          <h2>Resources</h2>
          <ul>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div> */}

        {/* Social Media */}
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://www.instagram.com/vaidyaaz/?igsh=MWRhOGw1aGd6eGM1dA%3D%3D"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/vaidyaaz-corporation-private-limited-31843a335/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © Vaidyaaz Corporation Private Limited. All rights reserved.{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

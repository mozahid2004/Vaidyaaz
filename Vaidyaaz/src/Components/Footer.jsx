import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2>Our Company</h2>
          <p>
            We provide top-quality products and services with a focus on
            customer satisfaction and innovation. Always here to serve you better.
          </p>
          <div className="contact-info">
            <p><FaPhoneAlt /> +91 98765 43210</p>
            <p><FaEnvelope /> support@yourcompany.com</p>
            <p><FaMapMarkerAlt /> Mumbai, India</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h2>Newsletter</h2>
          <p>Subscribe to get updates on our latest offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <Link to="#"><FaFacebookF /></Link>
            <Link to="#"><FaTwitter /></Link>
            <Link to="#"><FaInstagram /></Link>
            <Link to="#"><FaLinkedin /></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© VAIDYAAZ Corporation Pvt. Ltd. All rights reserved. {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;

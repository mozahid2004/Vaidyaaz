import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // 👈 loader state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 👈 start loader

    const params = new URLSearchParams(formData).toString();
    const url = `https://script.google.com/macros/s/AKfycbxcdkz9XNxGaW33vTN5yGJwT2j1CUAiTjlh5gDgoJAK68NfG7xLPnWU_J0S-85hwzEw/exec?${params}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.result === "success") {
        setSuccess("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSuccess("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setSuccess("❌ Network error: " + err.message);
    } finally {
      setLoading(false); // 👈 stop loader
    }

    setTimeout(() => setSuccess(""), 4000); // clear msg
  };

  return (
    <div className="contactpage-wrapper">
      {/* Banner */}
      <div className="contact-hero">
        <div className="overlay"></div>
        <h1># Contact Us</h1>
      </div>

      {/* Content */}
      <div className="contactpage-content">
        <h2>Get in Touch</h2>
        <p>We would love to hear from you! Reach us via form or contact details below.</p>

        <div className="contactpage-grid">
          {/* Form */}
          <form className="contactpage-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Loader / Success message */}
            {loading && <p className="loading-msg">⏳ Sending your message...</p>}
            {success && <p className="success-msg">{success}</p>}
          </form>

          {/* Info */}
          <div className="contactpage-info">
            <h3>Our Office</h3>
            <p>
              A - 42 ADDL MIDC NANDGAONPETH, AMRAVATI, Maharashtra, INDIA - Pin 444901
            </p>

            <h3>Contact Details</h3>
            <p>📞 Phone: +91 739-789-2909</p>
            <p>📧 Email: vaidyaaz@vaidyaaz.com</p>
            <p>CIN: U20119MH2024PTC432061</p>
            <p>GSTN: 27AAKCV4297K1ZJ</p>

            <h3>Location</h3>
            <iframe
              title="office-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1234567890!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce0f!2sMumbai%2C%20India!5e0!3m2!1sen!2sin!4v1691920000000"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={22} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={22} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

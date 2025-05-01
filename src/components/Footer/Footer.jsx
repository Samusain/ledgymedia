// components/Footer.js
import React from 'react';
// import { Link } from'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span>Ledgy Media</span>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Services</h4>
            <a href="/services" aria-label="Web Development">Web Development</a>
            <a href="/services" aria-label="Digital Marketing">Digital Marketing</a>
            <a href="/services" aria-label="Graphic Design">Graphic Design</a>
            <a href="/services" aria-label="SEO Optimization">SEO Optimization</a>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <a href="/about" aria-label="About Us">About Us</a>
            <a href="/" aria-label="Careers">Careers</a>
            <a href="/" aria-label="Blog">Blog</a>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <img src="../../images/blackheart.jpg" alt="fb-logo" />
            <a href="mailto:info@ledgymedia.com" aria-label="Email us at info@ledgymedia.com">info@ledgymedia.com</a>
            <a href="tel:+1234567890" aria-label="Call us at +234 (91) 570-351-64">+234 (91) 570-351-64</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Ledgy Media. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
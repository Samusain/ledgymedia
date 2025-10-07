import './Footer.css';
import React from 'react';
import fblogo from "../../images/fb-logo.png";
import iglogo from "../../images/logo-ig.webp";
import whatsapp from "../../images/whatsapp.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span>LEDGY MEDIA</span>
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
            <div className="social-container">
              {/* <a href="https://www.facebook.com/share/16yZxWRgs6/"><img src={fblogo} alt="fb-logo" className='social logo'/></a>
              <a href="/"><img src={whatsapp} alt="wsp-logo" className='social logo'/></a>
              <a href="https://www.instagram.com/ledgymedia?igsh=MXJzYWhnMWMwdWo5bw=="><img src={iglogo} alt="wsp-logo" className='social logo'/></a> */}
            </div>  
            <a href="mailto:info@ledgymedia.com" aria-label="Email us at info@ledgymedia.com">EMAIL: ledgymedia@gmail.com</a>
            <a href="tel:+2349159298135" aria-label="Call us at +234 (91) 592-981-35">WHATSAPP: +234 (91) 592-981-35</a>
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
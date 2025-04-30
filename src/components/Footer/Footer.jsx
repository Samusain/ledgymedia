// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="scroll-message">DAMN, YOU REALLY LIKE TO SCROLL!</p>
      <button className="cta-button">Let's talk!</button>
      
      <div className="footer-links">
        <p>Stalk Us</p>
        <a href="https://instagram.com/ledgymedia"><img src="../../images/facebook-logo.png" alt="facebook-logo" /></a>
        <a href="mailto:ledgymedia@gmail.com">ledgymedia@gmail.com</a>
      </div>
      
      <p className="made-in">Made in France</p>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>BOOST BRAND AWARENESS</h2>
        <p>CONNECT WITH YOUR TARGET AUDIENCE, DRIVE MEANINGFUL ENGAGEMENT, AND ACHIEVE MEASUREABLE RESULTS.</p>
        <button className="hero-btn">Get Started</button>
        
        <div className="client-logos">
          {/* <img src="../../images/google-grey.png" alt="Google" />
          <img src="/shopify-logo.png" alt="Shopify" />
          <img src="/meta-logo.png" alt="Meta" />
          <img src="/facebook-logo.png" alt="Facebook" /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
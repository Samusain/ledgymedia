// components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>OUR SERVICES</h2>
      
      <div className="services-container">
        <div className="service-card">
          <h3>Digital Architecture</h3>
          <p>This involves the design and development of web apps. Creating effective digital experiences that solve problems and engage users through the marriage of form and function.</p>
        </div>
        
        <div className="service-card">
          <h3>Digital Marketing</h3>
          <p>We deliver measurable results by leveraging various online channels to increase your brand visibilty, engagement and conersions.</p>
        </div>
        
        <div className="paid-ads">
          <h4>Paid Ads Platforms</h4>
          <div className="ads-grid">
            <span>Google Ads</span>
            <span>YouTube Ads</span>
            <span>X Ads</span>
            <span>Snapchat Ads</span>
            <span>Meta Ads</span>
            <span>Facebook Ads</span>
            <span>Instagram Ads</span>
          </div>
        </div>
      </div>
      
      <div className="stats-section">
        <h3>THE GOAL IS TO DRIVE TRAFFIC THROUGH YOUR WEBSITE TO GENERATE LEADS/SALES</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <h4>2,231,559</h4>
            <p>Accounts reached</p>
          </div>
          <div className="stat-item">
            <h4>2,231,589</h4>
            <p>Non-followers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
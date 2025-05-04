// components/Process.js
import React from 'react';
import './Process.css';

const Process = () => {
  return (
    <section className="process" id="process">
      <h2>HOW WE DO IT!</h2>
      <p className="subtitle">Reach your target audience utilizing our 3-step process</p>
      
      <div className="steps">
        <div className="step">
          <h3>1. Strategy & Audit</h3>
          <p>We dive deep into your brand performance, customer data and branding to uncover hidden growth opportunities - and craft a custom growth plan tailored to your business.</p>
        </div>
        
        <div className="step">
          <h3>2. Build & Optimize</h3>
          <p>We design high-converting website that feels on-brand and performs like a machine. From custom builds to optimized product pages, we handle everything - and make sure it's built to convert.</p>
        </div>
        
        <div className="step">
          <h3>3. Launch & Scale</h3>
          <p>Once you're live, we launch targeted ads campaign, set up automated email flows and provide ongoing support to your website becomes a reliable, scalable stream of revenue.</p>
        </div>
      </div>
      
      <button className="cta-button">Join The Waitlist</button>
    </section>
  );
};

export default Process;
// components/Results.js
import React from 'react';
import './Results.css';

const Results = () => {
  return (
    <section className="results">
      <h2>RESULTS</h2>
      
      <div className="results-grid">
        <div className="result-card">
          <h3>From 70,500 ads to 2012</h3>
          <p>Onsite more sessions</p>
          <p className="highlight">57,888 +110%</p>
        </div>
        
        <div className="result-card">
          <h3>Total ads</h3>
          <p className="highlight">960,965,323.60 +10%</p>
        </div>
        
        <div className="result-card">
          <h3>Last ads</h3>
          <p className="highlight">397 +10%</p>
        </div>
      </div>
      
    </section>
  );
};

export default Results;
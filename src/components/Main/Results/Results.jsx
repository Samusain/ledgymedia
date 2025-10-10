import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiTrendingUp, FiDollarSign, FiUsers, FiTarget } from 'react-icons/fi';
import './Results.css';

const Results = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const resultsData = [
    {
      id: 1,
      title: "From 7500 ads to 2012",
      description: "Onsite more sessions",
      value: "57,888",
      change: "+110%",
      icon: <FiTrendingUp />,
      color: "#10B981"
    },
    {
      id: 2,
      title: "Total ads",
      value: "664",
      change: "+10%",
      icon: <FiTarget />,
      color: "#3B82F6"
    },
    {
      id: 3,
      title: "Last ads",
      value: "397",
      change: "+10%",
      icon: <FiUsers />,
      color: "#8B5CF6"
    },
    {
      id: 4,
      title: "ROI Increase",
      value: "189%",
      change: "+89%",
      icon: <FiDollarSign />,
      color: "#F59E0B"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section className="results" id="results" ref={sectionRef}>
      <div className="results-background"></div>
      
      <div className="container">
        {/* Header */}
        <motion.div 
          className="results-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>PROVEN RESULTS</h2>
          <p className="results-subtitle">
            Data-driven outcomes that speak louder than words
          </p>
        </motion.div>

        {/* GIFs Section */}
        <motion.div 
          className="gifs-section"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="gif-container"
            variants={imageVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="gif-card">
              <img src="https://cdn.prod.website-files.com/64db496952ca1186ffecde58/68235220ce4902260c012347_ee1ab72c588e605e945fc4d06fb9995e_ad-spend.gif" alt="Ad Spend Performance" className="results-gif" />
              <div className="gif-overlay">
                {/* <h4>Ad Spend Optimization</h4> */}
                <p>Strategic budget allocation for maximum ROI</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="gif-container"
            variants={imageVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="gif-card">
              <img src="https://cdn.prod.website-files.com/64db496952ca1186ffecde58/68235222ad6094ae2527e46a_cf035ff4b1ad6b84a38bbda0630913f3_revenue-generate.gif" alt="Revenue Generation" className="results-gif" />
              <div className="gif-overlay">
                {/* <h4>Revenue Growth</h4> */}
                <p>Consistent revenue increase through targeted campaigns</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Results Grid */}
        <motion.div 
          className="results-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {resultsData.map((result) => (
            <motion.div
              key={result.id}
              className="result-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ 
                '--result-color': result.color,
                '--result-color-light': result.color + '20'
              }}
            >
              {/* Icon */}
              <div 
                className="result-icon"
                style={{ color: result.color }}
              >
                {result.icon}
                <div 
                  className="icon-glow"
                  style={{ backgroundColor: result.color }}
                />
              </div>

              {/* Content */}
              <div className="result-content">
                <h3>{result.title}</h3>
                {result.description && <p className="result-description">{result.description}</p>}
                <div className="result-value">
                  <span className="highlight">{result.value}</span>
                  <span className="change-indicator" style={{ color: result.color }}>
                    {result.change}
                  </span>
                </div>
              </div>

              {/* Hover Effects */}
              <div 
                className="result-glow"
                style={{ background: `radial-gradient(circle, ${result.color}15, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div 
          className="performance-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="stat-badge">
            <div className="stat-number">2.2M+</div>
            <div className="stat-label">Accounts Reached</div>
          </div>
          <div className="stat-badge">
            <div className="stat-number">450%</div>
            <div className="stat-label">Engagement Rate</div>
          </div>
          <div className="stat-badge">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
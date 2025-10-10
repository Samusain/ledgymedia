import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiGlobe, FiTrendingUp, FiBarChart2, FiSearch, FiCode, FiLayout } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.2 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const services = [
    {
      id: 1,
      title: "Website Design",
      description: "Creating stunning, user-centric website designs that captivate your audience and reflect your brand identity. We focus on intuitive layouts, modern aesthetics, and seamless user experiences.",
      icon: <FiLayout />,
      color: "#8B5CF6",
      features: ["UI/UX Design", "Responsive Layouts", "Brand Alignment", "Prototyping"]
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building high-performance, scalable websites and web applications using cutting-edge technologies. From frontend interfaces to backend systems, we deliver robust digital solutions.",
      icon: <FiCode />,
      color: "#06B6D4",
      features: ["Frontend Development", "Backend Systems", "E-commerce", "Web Applications"]
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Boost your online visibility and organic traffic with comprehensive SEO strategies. We optimize your website to rank higher in search results and attract qualified leads.",
      icon: <FiSearch />,
      color: "#10B981",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"]
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Drive measurable results by leveraging various online channels to increase your brand visibility, engagement, and conversions across multiple platforms.",
      icon: <FiTrendingUp />,
      color: "#F59E0B",
      features: ["Social Media Marketing", "Content Marketing", "Email Campaigns", "Analytics"]
    },
    {
      id: 5,
      title: "Paid Advertising",
      description: "Maximize your ROI with strategic paid campaigns across major platforms. We create and optimize ads that convert and drive targeted traffic to your business.",
      icon: <FiBarChart2 />,
      color: "#EF4444",
      features: ["Google Ads", "Meta Ads", "YouTube Ads", "Conversion Tracking"]
    }
  ];

  const paidAdsPlatforms = [
    "Google Ads", "YouTube Ads", "X (Twitter) Ads", "Snapchat Ads", 
    "Meta Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="services" id="services" ref={sectionRef}>
      {/* Animated Background */}
      <motion.div 
        className="services-background"
        style={{ y: backgroundY }}
      />
      
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="services-header"
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>OUR SERVICES</h2>
          <p className="services-subtitle">
            Comprehensive digital solutions designed to elevate your brand, 
            drive growth, and deliver measurable results
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="services-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-card ${hoveredCard === service.id ? 'hovered' : ''}`}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              style={{ 
                '--service-color': service.color,
                '--service-color-light': service.color + '20'
              }}
            >
              {/* Service Icon */}
              <div className="service-icon-wrapper">
                <div 
                  className="service-icon"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                <div 
                  className="service-icon-glow"
                  style={{ backgroundColor: service.color }}
                />
              </div>

              {/* Service Content */}
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                {/* Features List */}
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="service-feature"
                      style={{ borderColor: service.color }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Elements */}
              <div 
                className="service-glow"
                style={{ background: `radial-gradient(circle, ${service.color}15, transparent 70%)` }}
              />
              <div 
                className="service-border-glow"
                style={{ borderColor: service.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Paid Ads Platforms Section */}
        <motion.div 
          className="paid-ads-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="paid-ads-header">
            <FiGlobe className="ads-icon" />
            <h3>Paid Ads Platforms We Master</h3>
            <p>Strategic advertising across all major digital platforms</p>
          </div>
          
          <div className="ads-grid">
            {paidAdsPlatforms.map((platform, index) => (
              <motion.span
                key={platform}
                className="ads-platform"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.8 + (index * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                {platform}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="stats-section"
          variants={statsVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>DRIVING MEASURABLE RESULTS FOR OUR CLIENTS</h3>
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4>2,231,559</h4>
              <p>Accounts Reached</p>
              <div className="stat-bar">
                <div 
                  className="stat-progress"
                  style={{ background: 'linear-gradient(90deg, #8B5CF6, #6366f1)' }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4>2,231,589</h4>
              <p>Non-followers Engaged</p>
              <div className="stat-bar">
                <div 
                  className="stat-progress"
                  style={{ background: 'linear-gradient(90deg, #06B6D4, #10B981)' }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4>189%</h4>
              <p>Average ROI Increase</p>
              <div className="stat-bar">
                <div 
                  className="stat-progress"
                  style={{ background: 'linear-gradient(90deg, #F59E0B, #EF4444)' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
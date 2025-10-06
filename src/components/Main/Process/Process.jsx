import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiCheck, FiUsers, FiTarget, FiCode, FiBarChart } from 'react-icons/fi';
import './Process.css';

const Process = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, threshold: 0.3 });
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We conduct in-depth analysis of your brand, target audience, and market position. Through comprehensive audits and stakeholder interviews, we uncover hidden growth opportunities and craft a data-driven strategy tailored to your business objectives.",
      icon: <FiTarget />,
      color: "#8B5CF6",
      features: ["Brand Audit", "Market Research", "Competitor Analysis", "Strategy Development"]
    },
    {
      number: "02",
      title: "Planning & Architecture",
      description: "We design comprehensive user journeys and information architecture. Our team creates wireframes, prototypes, and technical specifications to ensure seamless user experiences and scalable solutions.",
      icon: <FiUsers />,
      color: "#F472B6",
      features: ["User Journey Mapping", "Wireframing", "Technical Planning", "Project Timeline"]
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Our creative and technical teams collaborate to build high-converting, brand-aligned digital experiences. We focus on responsive design, performance optimization, and conversion-focused interfaces.",
      icon: <FiCode />,
      color: "#06B6D4",
      features: ["UI/UX Design", "Frontend Development", "Backend Integration", "Quality Assurance"]
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description: "We deploy your solution with precision, followed by rigorous testing and performance optimization. Our launch process includes A/B testing, speed optimization, and conversion rate optimization.",
      icon: <FiCheck />,
      color: "#10B981",
      features: ["Staging Deployment", "Performance Testing", "SEO Implementation", "Analytics Setup"]
    },
    {
      number: "05",
      title: "Growth & Scaling",
      description: "Post-launch, we provide ongoing support, analytics monitoring, and growth strategies. We help scale your digital presence through targeted campaigns, content strategy, and continuous optimization.",
      icon: <FiBarChart />,
      color: "#F59E0B",
      features: ["Performance Monitoring", "Growth Marketing", "Content Strategy", "Ongoing Support"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [steps.length]);

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
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const progressVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="process" id="process" ref={sectionRef}>
      {/* Animated Background */}
      <motion.div 
        className="process-background"
        style={{ y: backgroundY }}
      />
      
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>OUR PROVEN PROCESS</h2>
          <p className="subtitle">
            A comprehensive 5-step methodology designed to transform your digital presence 
            and drive measurable business growth
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div 
          className="progress-tracker"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={progressVariants}
        >
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
          <div className="progress-steps">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`progress-step ${index <= activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span>{step.number}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="steps-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="steps-grid">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`step-card ${index === activeStep ? 'active' : ''}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Number & Icon */}
                <div className="step-header">
                  <div 
                    className="step-number"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}33)`,
                      borderColor: step.color
                    }}
                  >
                    {step.number}
                  </div>
                  <div 
                    className="step-icon"
                    style={{ color: step.color }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  
                  {/* Features List */}
                  <div className="step-features">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="feature-item">
                        <FiCheck className="feature-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active State Indicator */}
                <div 
                  className="step-indicator"
                  style={{ backgroundColor: step.color }}
                />
                
                {/* Hover Effect Overlay */}
                <div 
                  className="step-overlay"
                  style={{ 
                    background: `linear-gradient(135deg, ${step.color}15, transparent)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="process-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Ready to Transform Your Digital Presence?</h3>
          <p>Join brands that have achieved remarkable growth through our proven process</p>
          <motion.button 
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(244, 114, 182, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Journey</span>
            <FiArrowRight className="button-icon" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
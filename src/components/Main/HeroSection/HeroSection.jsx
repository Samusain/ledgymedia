import { HashLink as Link } from 'react-router-hash-link';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import './HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const isInView = useInView(heroRef, { once: false, threshold: 0.3 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Floating particles effect - only on desktop
  useEffect(() => {
    if (windowWidth < 768) return; // Disable particles on mobile

    const createParticle = () => {
      if (!heroRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.opacity = Math.random() * 0.3 + 0.1;
      particle.style.width = particle.style.height = Math.random() * 6 + 2 + 'px';
      
      heroRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 5000);
    };

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(createParticle, i * 200);
    }

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, [windowWidth]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      {/* Animated Background Overlay */}
      <div className="hero-background-overlay"></div>
      
      {/* Floating Particles Container - Only on desktop */}
      {windowWidth >= 768 && <div className="particles-container"></div>}

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Animated Main Heading */}
        <motion.div 
          className="text-reveal-container"
          variants={textVariants}
        >
          <h1 className="hero-title">
            BOOST BRAND
            <span className="gradient-text"> AWARENESS</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div 
          className="subtitle-container"
          variants={textVariants}
        >
          <p className="hero-subtitle">
            CONNECT WITH YOUR TARGET AUDIENCE, DRIVE MEANINGFUL ENGAGEMENT, 
            AND ACHIEVE MEASURABLE RESULTS.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="hero-actions"
          variants={containerVariants}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="/contact" className="btn btn-primary">
              <FiPlay />
              Get Started
            </Link>
          </motion.div>
          
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link to="#services" className="btn btn-secondary">
              Learn More
              <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section - Hidden on mobile */}
        {windowWidth >= 768 && (
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-item">
              <div className="stat-number">2.2M+</div>
              <div className="stat-label">Accounts Reached</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">189%</div>
              <div className="stat-label">Avg. ROI Increase</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </motion.div>
        )}

        {/* Scroll Indicator - Hidden on mobile */}
        {/* {windowWidth >= 768 && (
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="scroll-arrow">
              <div className="scroll-arrow-inner"></div>
            </div>
            <span className="scroll-text">Scroll to explore</span>
          </motion.div>
        )} */}
      </motion.div>

      {/* Animated Gradient Orbs - Only on desktop */}
      {windowWidth >= 1024 && (
        <>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
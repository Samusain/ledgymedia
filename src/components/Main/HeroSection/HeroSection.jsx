import { HashLink as Link } from 'react-router-hash-link';
import { useRef, useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  // Floating particles effect
  useEffect(() => {
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
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Animated Background Overlay */}
      <div className="hero-background-overlay"></div>
      
      {/* Floating Particles Container */}
      <div className="particles-container"></div>

      <div className="hero-content">
        {/* Animated Main Heading */}
        <div className="text-reveal-container">
          <h2 
            className={`text-reveal ${isVisible ? 'revealed' : ''}`}
            ref={textRef}
          >
            BOOST BRAND AWARENESS
          </h2>
        </div>

        {/* Typing Animation for Subtitle */}
        <div className="typing-container">
          <p className={`typing-animation ${isVisible ? 'typing' : ''}`}>
            CONNECT WITH YOUR TARGET AUDIENCE, DRIVE MEANINGFUL ENGAGEMENT, AND ACHIEVE MEASUREABLE RESULTS.
          </p>
        </div>

        {/* Animated Button with Magnetic Effect */}
        <div className="magnetic-container">
          <Link to="/contact">
            <button className="hero-btn magnetic-btn">
              <span className="btn-text">Get Started</span>
              <span className="btn-gradient"></span>
              <span className="btn-sparkles">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="sparkle"></span>
                ))}
              </span>
            </button>
          </Link>
        </div>

        {/* Animated Scroll Indicator */}
        {/* <div className="scroll-indicator">
          <div className="scroll-arrow">
            <div className="scroll-arrow-inner"></div>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div> */}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </section>
  );
};

export default HeroSection;
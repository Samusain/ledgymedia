import React, { useRef, useEffect } from 'react';
import './AboutScroll.css';

const AboutScroll = () => {
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);
  const animationFrameIdRef = useRef(null); // Use useRef to store animationFrameId
  let isHovered = false;
  let scrollSpeed = 0.5; // Pixels per frame

  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = contentRef.current;

    // Clone content for seamless looping
    content.innerHTML += content.innerHTML;

    const autoScroll = () => {
      if (!isHovered && container.scrollTop < content.scrollHeight / 2) {
        container.scrollTop += scrollSpeed;
      } else if (container.scrollTop >= content.scrollHeight / 2) {
        container.scrollTop = 0;
      }
      animationFrameIdRef.current = requestAnimationFrame(autoScroll); // Store the ID in useRef
    };

    animationFrameIdRef.current = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current); // Cancel the animation frame using useRef
    };
  }, []);

  const handleHover = () => {
    isHovered = true;
  };

  const handleLeave = () => {
    isHovered = false;
  };

  return (
    <section id="about">    
      <div className="about-section">
        <h2 className="section-title">About Us</h2>
        <div 
          className="scroll-container" 
          ref={scrollContainerRef}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onTouchStart={handleHover}
          onTouchEnd={handleLeave}
        >
          <div className="scroll-content" ref={contentRef}>
            <div className="about-card">
              <h3>Our Story</h3>
              <p>Founded in 2020, we began as a small team passionate about creating digital experiences that matter. Today, we've grown into a full-service agency helping brands worldwide.</p>
            </div>
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>To bridge the gap between technology and creativity, delivering solutions that are both beautiful and functional. We believe in design that works and code that inspires.</p>
            </div>
            <div className="about-card">
              <h3>Core Values</h3>
              <ul>
                <li>Innovation through iteration</li>
                <li>Transparency in all processes</li>
                <li>User-centric design philosophy</li>
                <li>Sustainable digital practices</li>
              </ul>
            </div>
            <div className="about-card">
              <h3>The Team</h3>
              <p>30+ specialists across design, development, and strategy. We're united by our curiosity and commitment to excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutScroll;
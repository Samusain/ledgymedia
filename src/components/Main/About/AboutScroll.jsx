import React, { useRef, useEffect, useState, useCallback } from 'react';
import './AboutScroll.css';

const AboutScroll = () => {
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 0.5;

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Clone content for seamless looping
    const originalContent = content.innerHTML;
    content.innerHTML = originalContent + originalContent;

    const autoScroll = () => {
      if (!isHovered && container.scrollTop < content.scrollHeight / 2) {
        container.scrollTop += scrollSpeed;
        
        // Update active card based on scroll position
        const cardHeight = 320; // Approximate card height with gap
        const newActiveCard = Math.floor(container.scrollTop / cardHeight) % 4;
        setActiveCard(newActiveCard);
      } else if (container.scrollTop >= content.scrollHeight / 2) {
        container.scrollTop = 0;
        setActiveCard(0);
      }
      animationFrameIdRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameIdRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isHovered]);

  const handleHover = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleDotClick = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardHeight = 320;
      container.scrollTo({
        top: index * cardHeight,
        behavior: 'smooth'
      });
      setActiveCard(index);
    }
  };

  const cardData = [
    {
      title: "Our Story",
      content: "Founded in 2020, we began as a small team passionate about creating digital experiences that matter. Today, we've grown into a full-service agency helping brands worldwide.",
      icon: "📖"
    },
    {
      title: "Our Mission",
      content: "To bridge the gap between technology and creativity, delivering solutions that are both beautiful and functional. We believe in design that works and code that inspires.",
      icon: "🎯"
    },
    {
      title: "Core Values",
      items: [
        "Innovation through iteration",
        "Transparency in all processes",
        "User-centric design philosophy",
        "Sustainable digital practices"
      ],
      icon: "💎"
    },
    {
      title: "The Team",
      content: "30+ specialists across design, development, and strategy. We're united by our curiosity and commitment to excellence.",
      icon: "👥"
    }
  ];

  return (
    <section id="about" aria-labelledby="about-title">    
      <div className={`about-section ${isVisible ? 'visible' : ''}`}>
        <h2 id="about-title" className="section-title">About Us</h2>
        
        <div className="scroll-content-wrapper">
          <div 
            className="scroll-container" 
            ref={scrollContainerRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onTouchStart={handleHover}
            onTouchEnd={handleLeave}
            aria-label="About company information scroll area"
          >
            <div className="scroll-content" ref={contentRef}>
              {[...cardData, ...cardData].map((card, index) => (
                <div 
                  key={index}
                  className={`about-card card-animation ${
                    Math.floor(index % 4) === activeCard ? 'card-active' : ''
                  }`}
                  style={{ animationDelay: `${(index % 4) * 0.1}s` }}
                >
                  <div className="card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  {card.content && <p>{card.content}</p>}
                  {card.items && (
                    <ul>
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="card-glow"></div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Enhanced navigation */}
        {/* <div className="scroll-navigation">
          <div className="nav-dots">
            {cardData.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === activeCard ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to ${cardData[index].title}`}
                aria-current={index === activeCard ? 'true' : 'false'}
              >
                <span className="dot-tooltip">{cardData[index].title}</span>
              </button>
            ))}
          </div>
          
          <div className="scroll-hint">
            <div className="mouse-wheel"></div>
            <span>Scroll to explore</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutScroll;
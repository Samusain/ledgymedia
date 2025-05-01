import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Duplicate slides for infinite effect
  const cards = [
    {
      name: "Sarah M.",
      position: "CEO",
      comment: "Working with Ledgy Media was a game-changer for our business. They designed a stunning, user-friendly website that perfectly represents our brand. The attention to detail and seamless functionality exceeded our expectations. Highly recommend!",
      company: "Tech Innovations"
    },
    {
      name: "James T.",
      position: "Marketing Dir",
      comment: "From start to finish, Ledgy Media delivered beyond what we imagined. Their team was responsive, efficient, and truly understood our vision. Our new website has already boosted our online presence and conversions. Thank you!",
      company: "Tech Innovations"
    },
    {
      name: "Lisa K.",
      position: "Founder",
      comment: "We needed a highly customized e-commerce platform, and Ledgy Media nailed it. Their developers were knowledgeable, creative, and solved every challenge we presented. Our sales have increased by 40% since launch!",
      company: "Tech Innovations"
    },
    {
      name: "David R.",
      position: "Op. Manager",
      comment: "What sets Ledgy Media apart is their ongoing support. Even after our website went live, they've been there to help with updates and optimizations. Truly a partner, not just a vendor.",
      company: "Tech Innovations"
    },
    {
      name: "Emily S.",
      position: "Creative Director",
      comment: "The team at Ledgy Media made the entire process stress-free. They kept us informed at every stage, incorporated our feedback, and delivered a website that looks and performs flawlessly. 10/10!",
      company: "Tech Innovations"
    }
  ];

  // Double the array for infinite loop illusion
  const duplicatedCards = [...cards, ...cards];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      if (prev >= cards.length * 2 - 1) {
        // When reaching the end of duplicated array, reset without animation
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(0);
        }, 500);
        return prev + 1;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      if (prev <= 0) {
        // When reaching the start, jump to middle without animation
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(cards.length);
        }, 500);
        return prev - 1;
      }
      return prev - 1;
    });
  };

  const getCardPosition = (index) => {
    const position = index - currentIndex;
    
    // Center 3 cards
    if (position >= -1 && position <= 1) {
      return position;
    }
    
    // Hide others
    return null;
  };

  return (
    <div className="card-slider-container">
      <h2>TESTIMONIALS</h2>
      <div 
        className="cards-wrapper"
        ref={sliderRef}
      >
        {duplicatedCards.map((card, index) => {
          const position = getCardPosition(index);
          
          if (position === null) return null;
          
          return (
            <div 
              key={`${card.name}-${index}`}
              className={`card ${position === 0 ? 'center' : position === -1 ? 'left' : 'right'} ${!isTransitioning ? 'no-transition' : ''}`}
              style={{
                '--card-bg': `rgba(255, 255, 255, ${position === 0 ? 0.2 : 0.2})`
              }}
            >
              {/* <div className="card-icon">{card.icon}</div> */}
              <p>{card.comment}</p>
              <h3>~ {card.name} <br/> {card.position}, {card.company}</h3>
              {/* <button className="card-button">Learn more</button> */}
            </div>
          );
        })}
      </div>

      <button className="slider-arrow prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="slider-arrow next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default CardSlider;
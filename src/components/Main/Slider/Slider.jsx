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
      title: "Digital Strategy",
      content: "Data-driven marketing campaigns that deliver real results.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M653.33-160v-280H800v280H653.33Zm-246.66 0v-640h146.66v640H406.67ZM160-160v-440h146.67v440H160Z"/></svg>
    },
    {
      title: "Web Development",
      content: "Beautiful, high-converting websites tailored to your brand.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M513.33-580v-260H840v260H513.33ZM120-446.67V-840h326.67v393.33H120ZM513.33-120v-393.33H840V-120H513.33ZM120-120v-260h326.67v260H120Zm66.67-393.33H380v-260H186.67v260ZM580-186.67h193.33v-260H580v260Zm0-460h193.33v-126.66H580v126.66Zm-393.33 460H380v-126.66H186.67v126.66ZM380-513.33Zm200-133.34Zm0 200ZM380-313.33Z"/></svg>
    },
    {
      title: "Social Media",
      content: "Grow your audience with strategic content and advertising.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M80-160v-100h80v-473.33q0-27.5 19.58-47.09Q199.17-800 226.67-800H840v66.67H226.67V-260h240v100H80Zm486.67 0q-14.17 0-23.75-9.58-9.59-9.59-9.59-23.75v-440q0-14.17 9.59-23.75 9.58-9.59 23.75-9.59h280q14.16 0 23.75 9.59 9.58 9.58 9.58 23.75v440q0 14.16-9.58 23.75-9.59 9.58-23.75 9.58h-280ZM600-260h213.33v-340H600v340Zm0 0h213.33H600Z"/></svg>
    },
    {
      title: "SEO Optimization",
      content: "Increase organic traffic with proven strategies.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M80-200v-66.67h400V-200H80Zm0-206.67v-66.66h200v66.66H80Zm0-206.66V-680h200v66.67H80ZM833.33-200l-158-158Q650-339 620.5-329.5T560-320q-83 0-141.5-58.5T360-520q0-83 58.5-141.5T560-720q83 0 141.5 58.5T760-520q0 31-9.5 60.5T722-404.67l158 158L833.33-200ZM559.84-386.67q55.49 0 94.49-38.84 39-38.84 39-94.33 0-55.49-38.84-94.49-38.84-39-94.33-39-55.49 0-94.49 38.84-39 38.84-39 94.33 0 55.49 38.84 94.49 38.84 39 94.33 39Z"/></svg>
    }
  ];

  // Double the array for infinite loop illusion
  const duplicatedCards = [...cards, ...cards];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);

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
      <div 
        className="cards-wrapper"
        ref={sliderRef}
      >
        {duplicatedCards.map((card, index) => {
          const position = getCardPosition(index);
          
          if (position === null) return null;
          
          return (
            <div 
              key={`${card.title}-${index}`}
              className={`card ${position === 0 ? 'center' : position === -1 ? 'left' : 'right'} ${!isTransitioning ? 'no-transition' : ''}`}
              style={{
                '--card-bg': `rgba(255, 255, 255, ${position === 0 ? 0.2 : 0.2})`
              }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
              <button className="card-button">Learn more</button>
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
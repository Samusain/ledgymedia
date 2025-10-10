import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import './Slider.css';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  const cards = [
    {
      name: "Sarah M.",
      position: "CEO",
      comment: "Working with Ledgy Media was a game-changer for our business. They designed a stunning, user-friendly website that perfectly represents our brand. The attention to detail and seamless functionality exceeded our expectations. Highly recommend!",
      company: "Tech Innovations",
      rating: 5
    },
    {
      name: "James T.",
      position: "Marketing Director",
      comment: "From start to finish, Ledgy Media delivered beyond what we imagined. Their team was responsive, efficient, and truly understood our vision. Our new website has already boosted our online presence and conversions. Thank you!",
      company: "Global Solutions Inc",
      rating: 5
    },
    {
      name: "Lisa K.",
      position: "Founder",
      comment: "We needed a highly customized e-commerce platform, and Ledgy Media nailed it. Their developers were knowledgeable, creative, and solved every challenge we presented. Our sales have increased by 40% since launch!",
      company: "Style Boutique",
      rating: 5
    },
    {
      name: "David R.",
      position: "Operations Manager",
      comment: "What sets Ledgy Media apart is their ongoing support. Even after our website went live, they've been there to help with updates and optimizations. Truly a partner, not just a vendor.",
      company: "Growth Partners",
      rating: 5
    },
    {
      name: "Emily S.",
      position: "Creative Director",
      comment: "The team at Ledgy Media made the entire process stress-free. They kept us informed at every stage, incorporated our feedback, and delivered a website that looks and performs flawlessly. 10/10!",
      company: "Artisan Studios",
      rating: 5
    }
  ];

  // Auto-advance slides
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);
  
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isHovered, handleNext]);


  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 10 : -10
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -10 : 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

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
    hidden: { opacity: 0, y: 20 },
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

  return (
    <motion.div 
      className="testimonials-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.3 }}
      variants={containerVariants}
    >
      <div className="testimonials-background"></div>
      
      <div className="container">
        {/* Header */}
        <motion.div className="testimonials-header" variants={itemVariants}>
          <h2>CLIENT TESTIMONIALS</h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it - hear what our clients have to say about their experience
          </p>
        </motion.div>

        {/* Slider Container */}
        <div 
          className="card-slider-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="cards-wrapper" ref={sliderRef}>
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={currentIndex}
                className="card center"
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={1}
              >
                {/* Quote Icon */}
                <div className="quote-icon">
                  {/* <FiQuote /> */}
                </div>

                {/* Rating Stars */}
                <div className="rating-stars">
                  {[...Array(cards[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="star-icon" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="testimonial-text">{cards[currentIndex].comment}</p>

                {/* Client Info */}
                <div className="client-info">
                  <div className="client-avatar">
                    {cards[currentIndex].name.charAt(0)}
                  </div>
                  <div className="client-details">
                    <h4 className="client-name">{cards[currentIndex].name}</h4>
                    <p className="client-position">{cards[currentIndex].position}</p>
                    <p className="client-company">{cards[currentIndex].company}</p>
                  </div>
                </div>

                {/* Card Glow Effect */}
                <div className="card-glow"></div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button 
            className="slider-arrow prev"
            onClick={handlePrev}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft />
          </motion.button>
          
          <motion.button 
            className="slider-arrow next"
            onClick={handleNext}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight />
          </motion.button>

          {/* Dots Indicator */}
          <div className="slider-dots">
            {cards.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <motion.span
                  className="dot-fill"
                  animate={{ scale: index === currentIndex ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="testimonials-stats"
          variants={itemVariants}
        >
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardSlider;
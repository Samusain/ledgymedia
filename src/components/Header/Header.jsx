import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['services', 'about', 'process'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.div 
      className={`header-container ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className="hero-header">
        <div className="logo-nav-container">
          {/* Logo */}
          <motion.div 
            className="logo-wrapper"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="#" onClick={closeMenu}>
              <img src={logo} alt="Ledgy Media Logo" className="logo" />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item.id} variants={itemVariants}>
                  <Link 
                    to={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.label}
                    <span className="nav-indicator"></span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>

        {/* Desktop CTA Button */}
        <motion.div
          className="cta-wrapper"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact" className="cta-link">
            <button className="cta-button">
              <span>Let's Talk</span>
              <FiArrowRight className="button-icon" />
            </button>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="mobile-nav"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.li key={item.id} variants={mobileItemVariants}>
                  <Link 
                    to={`#${item.id}`}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    <span className="link-number">0{index + 1}</span>
                    <span className="link-text">{item.label}</span>
                    <span className="link-arrow">→</span>
                  </Link>
                </motion.li>
              ))}
              
              {/* Mobile CTA Button */}
              <motion.li variants={mobileItemVariants} className="mobile-cta">
                <Link to="/contact" onClick={closeMenu} className='cta-link'>
                  <button className="mobile-cta-button">
                    Start Your Project
                    <FiArrowRight className="button-icon" />
                  </button>
                </Link>
              </motion.li>
            </motion.ul>

            {/* Mobile Footer */}
            <motion.div 
              className="mobile-nav-footer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p>Ready to elevate your brand?</p>
              <a href="mailto:hello@ledgymedia.com" className="contact-email">
                hello@ledgymedia.com
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
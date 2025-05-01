import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <header className="hero-header">
        <div className="logo-nav-container">
          <h1 className="logo">LEDGY MEDIA</h1>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#process">Process</a></li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button className="cta-button">Let's Talk →</button>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#process" onClick={toggleMenu}>Process</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
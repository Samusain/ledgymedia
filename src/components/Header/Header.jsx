import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
              <li><Link to="#services">Services</Link></li>
              <li><Link to="#about">About</Link></li>
              <li><Link to="#process">Process</Link></li>
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
          <li><Link to="#services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="#about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="#process" onClick={toggleMenu}>Process</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
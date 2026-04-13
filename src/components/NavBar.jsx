import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navlogo from '../assets/image/Main.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const navRef = useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        x: '0%', 
        duration: 0.5,
        ease: 'power4.out',
      });

      gsap.fromTo('.navbar__mobile-link, .navbar__mobile-cta', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, delay: 0.2 }
      );
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '-100%', 
        duration: 0.4,
        ease: 'power4.in',
      });
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={Navlogo} alt="DevEasy Logo" />
        </div>

        <div className="navbar__links">
          <a href="#" className="navbar__link">Product</a>
          <a href="#" className="navbar__link">Solutions</a>
          <a href="#" className="navbar__link">Pricing</a>
          <a href="#" className="navbar__link">Customers</a>
        </div>

        <div className="navbar__actions">
          <button className="navbar__cta">Try for free</button>
          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="navbar__toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full Screen Overlay Menu */}
      <div className={`navbar__mobile-overlay ${isOpen ? 'is-open' : ''}`} ref={mobileMenuRef}>
        
        <div className="mobile-header">
          {/* Top Left Close Button */}
          <button className="mobile-close" onClick={toggleMenu}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
             </svg>
          </button>
          
          {/* Center Logo */}
          <div className="mobile-logo-center">
            <img src={Navlogo} alt="Logo" />
          </div>
          
          <div style={{ width: '24px' }}></div>
        </div>

        <div className="mobile-content">
          <a href="#" className="navbar__mobile-link">Product</a>
          <a href="#" className="navbar__mobile-link">Solutions</a>
          <a href="#" className="navbar__mobile-link">Pricing</a>
          <a href="#" className="navbar__mobile-link">Customers</a>
          <button className="navbar__mobile-cta">Try for free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
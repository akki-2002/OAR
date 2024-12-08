import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'; 
import HamburgerIcon from '../../../Images/hamburger.png'; 
import ArrowDownIcon from '../../../Images/arrow-down.png'; 
import closeIcon from "../../../Images/close (1).png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <span className="logo-bold">OAR</span> <span className="studios">STUDIOS</span>
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={HamburgerIcon} alt="menu" />
      </div>

      <div
  className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}
  ref={menuRef}
  onMouseLeave={closeMenu}
>
<button className="close-button" onClick={closeMenu}>
    <img src={closeIcon} alt="Close Menu" />
  </button>
  <nav>
    <ul className="menu-links">
      <li><a href="/" onClick={closeMenu}>HOME <img src={ArrowDownIcon} className="home-spe arrow-down" alt="arrow" /></a></li>
    
      <li><a href="#about" onClick={closeMenu}>ABOUT <img src={ArrowDownIcon} className="arrow-down" alt="arrow" /></a></li>
      <li><a href="#services" onClick={closeMenu}>SERVICES <img src={ArrowDownIcon} className="arrow-down" alt="arrow" /></a></li>
      <li><a href="#work" onClick={closeMenu}>WORK <img src={ArrowDownIcon} className="arrow-down" alt="arrow" /></a></li>
     <li> <a href="#blogs" onClick={closeMenu}>BLOGS <img src={ArrowDownIcon} className="arrow-down" alt="arrow"/></a> </li>
      <li><a href="#faq" onClick={closeMenu}>FAQ <img src={ArrowDownIcon} className="arrow-down" alt="arrow" /></a></li>
      <li><a href="#contact" onClick={closeMenu}>CONTACT <img src={ArrowDownIcon} className="arrow-down" alt="arrow" /></a></li>
    </ul>
  </nav>
</div>

    </header>
  );
};

export default Navbar;

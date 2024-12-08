import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Use NavLink instead of Link
import Logo from '../../assets/logo.png'

import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMobile(false);
    setIsDropdownOpen(false); // Close dropdown when a link is clicked
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  // Close the dropdown when clicking anywhere outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click happened outside the dropdown menu
      if (!event.target.closest('.navbar-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className={`navbar ${isMobile ? 'active' : ''}`}>
      <div className="navbar-logo">
        <NavLink
          to="/"
          onClick={() => {
            closeMenu();
            scrollToTop();
          }}
        >
          <img src= {Logo } alt="Gabriel Giron Photography" className="logo" />
        </NavLink>
      </div>
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={() => {
              closeMenu();
              scrollToTop();
            }}
          >
         Home
          </NavLink>
        </li>        

        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={closeMenu}
          >
          Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
            onClick={closeMenu}
          >
          Contact
          </NavLink>
        </li>
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </button>
    </nav>
  );
};

export default Navbar;
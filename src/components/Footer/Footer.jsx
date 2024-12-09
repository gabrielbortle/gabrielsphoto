import React from 'react';
import './Footer.css'; // Assuming you will create a separate CSS file
import { Link } from 'react-router-dom';
import Logo from '../../assets/white.png'; // Your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Your Logo" className="footer-logo" />
        </Link>
        <div className="footer-links">
        <a href="/" className="footer-link">Home</a>

          <a href="/pricing" className="footer-link">Pricing</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <p className="footer-copyright">© 2024 Gabriel's Photo. All Rights Reserved.<br>
        </br>Website by Teton Code</p>
      </div>
    </footer>
  );
};

export default Footer;

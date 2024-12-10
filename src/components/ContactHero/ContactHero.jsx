import React from "react";
import { Helmet } from "react-helmet";
import backgroundImage from "../../assets/contactHero.jpg"; // Importing the image directly
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <div
      className="contact-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* React Helmet to preload the image */}
      <Helmet>
        <link rel="preload" href={backgroundImage} as="image" />
      </Helmet>

      <div className="contact-overlay">
        <h1>Let's Do This!</h1>
        <h2>Fill Out the Form to Get Started</h2>
      </div>
    </div>
  );
};

export default ContactHero;

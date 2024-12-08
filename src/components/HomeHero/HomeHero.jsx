import React, { useState, useEffect } from 'react';
import './HomeHero.css'; // Make sure to create and link the CSS file

// Import your images
import Image1 from '../../assets/background.jpg';  // Adjust the path as needed
import Image3 from '../../assets/background3.jpg';  // Adjust the path as needed
import Image4 from '../../assets/background4.jpg';  // Adjust the path as needed
import Image5 from '../../assets/background5.jpg';  // Adjust the path as needed

const HomeHero = () => {
  const images = [
    Image1,  // Direct image path
    Image5,
    Image3,
    Image4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Handle left and right arrow clicks
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="home-hero">
      <div className="arrow left" onClick={handleLeftClick}>
        &#10094;
      </div>
      <div className="hero-image" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
      <div className="arrow right" onClick={handleRightClick}>
        &#10095;
      </div>
    </div>
  );
};

export default HomeHero;

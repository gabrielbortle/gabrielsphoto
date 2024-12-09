import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Me from '../../assets/me.jpg'
import { Link, NavLink } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 }); // Trigger animation when 20% of the component is in view

  return (
    <motion.div
      ref={ref}
      className="intro-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="intro-image"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <img src= {Me} alt="Photographer" />
      </motion.div>
      <motion.div
        className="intro-text"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I’m Gabriel</h1>
        <h2>A Photographer Capturing Teton Valley's Beauty</h2>
        <p>
          Specializing in couples, graduations, and family portraits capturing
          unforgettable moments in the heart of Teton Valley.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
        >
  <Link to="/pricing" className="cta-link">
    View My Packages
  </Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Intro;

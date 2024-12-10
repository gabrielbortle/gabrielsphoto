import React from "react";
import { motion } from "framer-motion";
import "./Package.css";

const Package = ({ imageSrc, title, includes, price }) => {
  return (
    <motion.div
      className="service-package"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // Adjusting the viewport setting to reduce flickering
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <img src={imageSrc} className="service-image" alt="Package" />
      <h1 className="service-title">{title}</h1>
      <h2 className="service-includes">Includes:</h2>
      <p
        className="service-details"
        dangerouslySetInnerHTML={{ __html: includes }}
      ></p>
      <p className="service-price">{price}</p>
    </motion.div>
  );
};

export default Package;

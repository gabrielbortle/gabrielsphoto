import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Package.css";

const Package = ({ imageSrc, title, includes, price }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="service-package"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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

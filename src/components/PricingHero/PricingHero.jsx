import React from 'react';
import { Helmet } from 'react-helmet';
import './PricingHero.css';
import background from '../../assets/pricingHero.jpg'; // Replace with your image path

const PricingHero = () => {
  return (
    <div className="pricing-hero">
      {/* React Helmet for preloading the image */}
      <Helmet>
        <link rel="preload" href={background} as="image" />
      </Helmet>

      <h1 className="pricing-title">Info & Pricing</h1>
    </div>
  );
};

export default PricingHero;

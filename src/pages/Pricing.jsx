import React from 'react';
import PricingHero from '../components/PricingHero/PricingHero';
import ServicesContainer from '../components/ServicesContainer/ServicesContainer';

const Pricing = () => {
  return (
    <div>
      <PricingHero />
      {/* Add your services page content here */}
      <ServicesContainer />
    </div>
  );
}

export default Pricing;

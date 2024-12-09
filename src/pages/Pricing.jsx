import React from 'react';
import { Helmet } from 'react-helmet';
import PricingHero from '../components/PricingHero/PricingHero';
import ServicesContainer from '../components/ServicesContainer/ServicesContainer';

const Pricing = () => {
  return (
    <div>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Gabriel's Photography - Pricing + Info</title>
        <meta name="description" content="Explore the package options for Gabriel's Photography services, including couple photography, graduation photography, and more." />
        <meta name="keywords" content="photography pricing, Teton County, portrait photography pricing, couple photography pricing, Gabriel's Photography pricing" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Photography",
              "provider": {
                "@type": "Photographer",
                "name": "Gabriel's Photography",
                "url": "https://gabrielsphoto.com",
                "logo": "https://gabrielsphoto.com/logo.png",
                
              },
              "areaServed": {
                "@type": "Place",
                "name": "Teton County, ID"
              },
              "priceRange": "$$$",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "price": "Varies based on service",
                "url": "https://gabrielsphoto.com/pricing"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Your page content */}
      <PricingHero />
      {/* Add your services page content here */}
      <ServicesContainer />
    </div>
  );
}

export default Pricing;

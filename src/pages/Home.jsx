import React from 'react';
import { Helmet } from 'react-helmet';
import HomeHero from '../components/HomeHero/HomeHero';
import Intro from '../components/Intro/Intro';

const Home = () => {
  return (
    <div>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Gabriel's Photography - Home</title>
        <meta name="description" content="Welcome to Gabriel's Photography. We specialize in portrait and couple photography in Teton County." />
        <meta name="keywords" content="photography, Teton County, portrait photography, event photography, Gabriel's Photography" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Photographer",
              "name": "Gabriel's Photography",
              "url": "https://gabrielsphoto.com",
              "logo": "https://gabrielsphoto.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Cedron Road",
                "addressLocality": "Victor",
                "addressRegion": "ID",
                "postalCode": "83455"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-208-270-4338",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Your page content */}
      <HomeHero />
      {/* Add your home page content here */}
      <Intro />
    </div>
  );
}

export default Home;

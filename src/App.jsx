import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Your Home component
import Pricing from './pages/Pricing'; // Your Pricing component
import Contact from './pages/Contact'; // Your Contact component
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Helmet } from 'react-helmet'; // Import Helmet
import pricingBackground from './assets/pricingHero.jpg'; // Path to your pricing hero background image
import contactBackground from './assets/contactHero.jpg'; // Path to your contact hero background image

import { useLocation } from 'react-router-dom';

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]);

    return null;
  };

  return (
    <Router>
      <Helmet>
        {/* Preload both the pricing and contact hero images globally */}
        <link rel="preload" href={pricingBackground} as="image" />
        <link rel="preload" href={contactBackground} as="image" />
      </Helmet>
      
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

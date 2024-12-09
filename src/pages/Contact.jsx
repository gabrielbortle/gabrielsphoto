import React from 'react';
import { Helmet } from 'react-helmet';
import ContactHero from '../components/ContactHero/ContactHero';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* React Helmet for SEO */}
      <Helmet>
        <title>Gabriel's Photography - Contact</title>
        <meta name="description" content="Contact Gabriel's Photography to book your session or inquire about services in Teton County." />
        <meta name="keywords" content="contact photography, Teton County photographer, Gabriel's Photography contact" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Gabriel's Photography",
                "url": "https://gabrielsphoto.com",
                "logo": "https://gabrielsphoto.com/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-208-270-4338",
                  "contactType": "Customer Service",
                  "areaServed": "US",
                  "availableLanguage": "English"
                },
                
              }
            }
          `}
        </script>
      </Helmet>

      {/* Your page content */}
      <ContactHero />
      {/* Add your contact page content here */}
      <ContactForm />
    </div>
  );
}

export default Contact;

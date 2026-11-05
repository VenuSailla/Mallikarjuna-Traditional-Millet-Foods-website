import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { CONTACT_INFO } from './data/contactInfo';

function App() {
  return (
    <div className="app-layout">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Products />
        <Benefits />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <div className="floating-whatsapp-container" aria-label="WhatsApp quick contact">
        <WhatsAppButton
          variant="floating"
          customMessage={CONTACT_INFO.defaultMessage}
          ariaLabel="Contact Mallikarjuna Traditional Millet Foods on WhatsApp"
          iconSize={32}
        />
        <div className="floating-whatsapp-tooltip" role="tooltip">
          <strong>Order on WhatsApp</strong>
          <span>Instant Enquiry & Support</span>
        </div>
      </div>
    </div>
  );
}

export default App;

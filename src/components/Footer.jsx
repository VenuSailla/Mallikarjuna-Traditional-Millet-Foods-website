import React from 'react';
import { Wheat, Phone, Mail, ArrowUp, MapPin } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl, openWhatsApp } from '../data/contactInfo';
import { WhatsAppIcon } from './WhatsAppButton';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col footer-col-brand">
            <div className="brand-logo footer-logo">
              <div className="brand-icon-wrapper">
                <Wheat className="brand-icon" size={24} />
              </div>
              <div className="brand-text-block">
                <span className="brand-name">Mallikarjuna</span>
                <span className="brand-sub">Traditional Millet Foods</span>
              </div>
            </div>

            <p className="footer-quote">
              "Bringing the traditional goodness of millets to everyday life."
            </p>

            <p className="footer-desc">
              Dedicated to reviving wholesome Indian culinary traditions with authentic finger
              millet, sorghum, and pearl millet foods. Serving exclusively in Karimnagar City.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Traditional Products */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Specialities</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#product-ragi-java" className="footer-nav-link">
                  Ragi Java (Millet Porridge)
                </a>
              </li>
              <li>
                <a href="#product-ragi-roti" className="footer-nav-link">
                  Handmade Ragi Roti
                </a>
              </li>
              <li>
                <a href="#product-jowar-roti" className="footer-nav-link">
                  Traditional Jowar Roti
                </a>
              </li>
              <li>
                <a href="#product-bajra-foods" className="footer-nav-link">
                  Wholesome Bajra Foods
                </a>
              </li>
              <li>
                <a href="#product-millet-flour" className="footer-nav-link">
                  Pure Stone-ground Flour
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Direct Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <a href={CONTACT_INFO.phoneHref} className="footer-contact-item">
                  <div className="footer-icon-circle">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="footer-label">Call Phone:</span>
                    <strong>{CONTACT_INFO.phoneDisplay}</strong>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={getWhatsAppUrl()}
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp();
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <div className="footer-icon-circle footer-icon-wa">
                    <WhatsAppIcon size={16} />
                  </div>
                  <div>
                    <span className="footer-label">WhatsApp Order:</span>
                    <strong>{CONTACT_INFO.phoneDisplay}</strong>
                  </div>
                </a>
              </li>

              <li>
                <a href={CONTACT_INFO.emailHref} className="footer-contact-item">
                  <div className="footer-icon-circle">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="footer-label">Email Us:</span>
                    <strong>{CONTACT_INFO.email}</strong>
                  </div>
                </a>
              </li>
              <li>
                <div className="footer-contact-item">
                  <div className="footer-icon-circle">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="footer-label">Service Area:</span>
                    <strong>Karimnagar City Only</strong>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {currentYear} <strong>Mallikarjuna Traditional Millet Foods</strong>. All rights
            reserved.
          </p>
          <div className="footer-bottom-right">
            <span className="footer-tagline-small">Karimnagar City Only • Natural • Fresh • Authentic</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="scroll-top-btn"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


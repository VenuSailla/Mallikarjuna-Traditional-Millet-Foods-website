import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Wheat } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { CONTACT_INFO } from '../data/contactInfo';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to apply sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
      {/* Top Announcement / Quick Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span className="top-bar-tagline">
            🌾 Traditional South Indian Millet Foods • 📍 Available Only in Karimnagar City
          </span>
          <div className="top-bar-contact">
            <a href={CONTACT_INFO.phoneHref} className="top-bar-link">
              <Phone size={13} />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav" aria-label="Main Navigation">
        <div className="container nav-container">
          {/* Logo */}
          <a href="#home" className="brand-logo" onClick={handleLinkClick}>
            <div className="brand-icon-wrapper">
              <Wheat className="brand-icon" size={24} />
            </div>
            <div className="brand-text-block">
              <span className="brand-name">Mallikarjuna</span>
              <span className="brand-sub">Traditional Millet Foods</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="desktop-nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Header Action Button (Desktop) */}
          <div className="header-actions">
            <WhatsAppButton variant="header" iconSize={18}>
              WhatsApp Order
            </WhatsAppButton>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Drawer */}
      <div
        className={`mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            <div className="brand-icon-wrapper">
              <Wheat className="brand-icon" size={22} />
            </div>
            <div className="brand-text-block">
              <span className="brand-name">Mallikarjuna</span>
              <span className="brand-sub">Traditional Millet Foods</span>
            </div>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="mobile-nav-item">
              <a href={link.href} className="mobile-nav-link" onClick={handleLinkClick}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <WhatsAppButton
            variant="primary"
            className="w-full"
            iconSize={20}
          >
            Order on WhatsApp
          </WhatsAppButton>
          <div className="mobile-drawer-contact">
            <p>📍 Available Only in Karimnagar City</p>
            <a href={CONTACT_INFO.phoneHref} className="mobile-drawer-phone">
              <Phone size={15} /> {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


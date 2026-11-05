import React from 'react';
import { Phone, Mail, MessageSquare, Headphones } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/contactInfo';
import { WhatsAppIcon } from './WhatsAppButton';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-pill">
            <Headphones size={14} />
            <span>Direct Communication</span>
          </div>
          <h2 className="section-title">Get in Touch With Us</h2>
          <p className="section-subtitle">
            Have questions about our traditional millet foods? Contact us directly. We are happy
            to help.
          </p>
        </div>

        {/* 3 Contact Cards Required in Section 11 */}
        <div className="contact-cards-grid">
          {/* Card 1: Phone */}
          <div className="contact-card">
            <div className="contact-card-icon contact-icon-phone">
              <Phone size={28} />
            </div>
            <h3 className="contact-card-title">Phone Call</h3>
            <p className="contact-card-subtitle">Speak directly with us for inquiries and orders</p>
            <p className="contact-card-value">{CONTACT_INFO.phoneDisplay}</p>
            <a
              href={CONTACT_INFO.phoneHref}
              className="btn btn-outline-contact"
              aria-label={`Call ${CONTACT_INFO.phoneDisplay}`}
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 2: WhatsApp (Primary) */}
          <div className="contact-card contact-card-featured">
            <div className="contact-badge-featured">Fastest Response</div>
            <div className="contact-card-icon contact-icon-whatsapp">
              <WhatsAppIcon size={30} />
            </div>
            <h3 className="contact-card-title">WhatsApp</h3>
            <p className="contact-card-subtitle">
              Order, enquire about availability & ask questions instantly
            </p>
            <p className="contact-card-value">{CONTACT_INFO.phoneDisplay}</p>
            <WhatsAppButton
              variant="card-action"
              className="btn-whatsapp-card-action"
              customMessage="Hello Mallikarjuna Traditional Millet Foods, I have a question about your millet foods."
              ariaLabel="WhatsApp Us"
              iconSize={18}
            >
              WhatsApp Us
            </WhatsAppButton>
          </div>

          {/* Card 3: Email */}
          <div className="contact-card">
            <div className="contact-card-icon contact-icon-email">
              <Mail size={28} />
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <p className="contact-card-subtitle">Send us your detailed queries or bulk feedback</p>
            <p className="contact-card-value">{CONTACT_INFO.email}</p>
            <a
              href={CONTACT_INFO.emailHref}
              className="btn btn-outline-contact"
              aria-label={`Email to ${CONTACT_INFO.email}`}
            >
              <Mail size={16} />
              <span>Email Us</span>
            </a>
          </div>
        </div>

        {/* Functional EmailJS Contact Form */}
        <ContactForm />

        {/* Quick WhatsApp helper notice */}
        <div className="contact-notice">
          <MessageSquare size={18} className="notice-icon" />
          <span>
            We are readily available on WhatsApp for quick responses on product availability,
            daily orders, and pricing details.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;

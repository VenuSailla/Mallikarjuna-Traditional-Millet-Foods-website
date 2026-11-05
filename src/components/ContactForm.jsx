import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../config/emailConfig';
import { PRODUCTS } from '../data/products';

const INITIAL_FORM = {
  customerName: '',
  email: '',
  phone: '',
  product: 'General Enquiry',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' }); // 'success' | 'error' | null

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else {
      const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Please enter a valid phone number (8-15 digits).';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your enquiry message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    // Validate all required fields
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Template parameters for EmailJS
    const templateParams = {
      from_name: formData.customerName.trim(),
      from_email: formData.email.trim(),
      phone: formData.phone.trim(),
      product: formData.product,
      message: formData.message.trim(),
      to_email: 'saillavenu012@gmail.com',
    };

    try {
      if (!isEmailJSConfigured()) {
        // Fallback friendly message if user hasn't added real keys yet in .env
        console.warn(
          'EmailJS is using placeholder keys. To receive real emails, set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
        );
        // Simulate sending delay for UI verification
        await new Promise((resolve) => setTimeout(resolve, 1200));

        setStatus({
          type: 'success',
          message:
            'Thank you! Your enquiry has been received. (Note: EmailJS is running in preview mode; update your .env with active credentials to deliver live emails to saillavenu012@gmail.com).',
        });
        setFormData(INITIAL_FORM);
        return;
      }

      // Live send via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200 || response.text === 'OK') {
        setStatus({
          type: 'success',
          message:
            'Thank you! Your enquiry has been sent successfully. We will get back to you shortly.',
        });
        setFormData(INITIAL_FORM);
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message:
          'Unable to send enquiry at the moment. Please try again or reach us directly on WhatsApp or phone.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <h3 className="contact-form-title">Send Us an Enquiry</h3>
        <p className="contact-form-subtitle">
          Fill in your details below and we will get back to you with pricing and product
          information.
        </p>
      </div>

      {/* Status Notifications */}
      {status.type === 'success' && (
        <div className="form-alert form-alert-success" role="alert">
          <CheckCircle size={20} className="alert-icon" />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === 'error' && (
        <div className="form-alert form-alert-error" role="alert">
          <AlertCircle size={20} className="alert-icon" />
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="contact-form">
        <div className="form-grid">
          {/* Customer Name */}
          <div className="form-group">
            <label htmlFor="customerName" className="form-label">
              Customer Name <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="e.g. Ramesh Kumar"
              className={`form-input ${errors.customerName ? 'input-error' : ''}`}
            />
            {errors.customerName && (
              <span className="field-error">{errors.customerName}</span>
            )}
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="e.g. ramesh@example.com"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="required-star">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="e.g. +91 9908372515"
              className={`form-input ${errors.phone ? 'input-error' : ''}`}
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>

          {/* Product Interested In */}
          <div className="form-group">
            <label htmlFor="product" className="form-label">
              Product Interested In
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              disabled={isLoading}
              className="form-select"
            >
              <option value="General Enquiry">General Enquiry / All Products</option>
              {PRODUCTS.map((prod) => (
                <option key={prod.id} value={prod.name}>
                  {prod.name} - {prod.shortDescription}
                </option>
              ))}
              <option value="Custom Order / Bulk">Custom Order / Daily Subscription</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="form-group form-group-full">
          <label htmlFor="message" className="form-label">
            Message <span className="required-star">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Please let us know your requirements, delivery preference, or questions..."
            className={`form-textarea ${errors.message ? 'input-error' : ''}`}
          />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <div className="form-submit-row">
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary btn-submit-enquiry"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="spinner-icon" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;


/**
 * Centralized Contact and Business Information
 * Easily update phone, email, and WhatsApp details here
 */

export const CONTACT_INFO = {
  businessName: 'Mallikarjuna Traditional Millet Foods',
  tagline: 'Healthy Living Starts with Traditional Millets',
  phoneDisplay: '+91 9908372515',
  phoneRaw: '+919908372515',
  phoneHref: 'tel:+919908372515',
  whatsappNumber: '919908372515',
  whatsappUrl: 'https://wa.me/919908372515',
  email: 'saillavenu012@gmail.com',
  emailHref: 'mailto:saillavenu012@gmail.com',
  defaultMessage:
    'Hello Mallikarjuna Traditional Millet Foods, I am interested in your products. Please share the details and prices.',
};

/**
 * Open WhatsApp using JavaScript with encoded message
 * @param {string} message
 */
export const openWhatsApp = (message) => {
  const phone = '919908372515';
  const resolvedMessage = message || CONTACT_INFO.defaultMessage;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(resolvedMessage)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Generate a WhatsApp chat URL with encoded custom message
 * @param {string} customMessage
 * @returns {string}
 */
export const getWhatsAppUrl = (customMessage) => {
  const msg = customMessage || CONTACT_INFO.defaultMessage;
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

/**
 * Generate product-specific WhatsApp enquiry URL
 * @param {string} productName
 * @returns {string}
 */
export const getProductWhatsAppUrl = (productName) => {
  const message = `Hello, I am interested in ${productName}. Please share the price and availability.`;
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

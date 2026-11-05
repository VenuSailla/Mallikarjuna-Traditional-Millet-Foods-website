/**
 * EmailJS Configuration
 * Reads credentials securely from environment variables using import.meta.env
 * Never hardcode credentials in components or public source files.
 */

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

/**
 * Checks whether user has supplied actual credentials rather than the default placeholders
 * @returns {boolean}
 */
export const isEmailJSConfigured = () => {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
  const isPlaceholder = (val) =>
    !val ||
    val === 'your_service_id' ||
    val === 'your_template_id' ||
    val === 'your_public_key';

  return !isPlaceholder(serviceId) && !isPlaceholder(templateId) && !isPlaceholder(publicKey);
};

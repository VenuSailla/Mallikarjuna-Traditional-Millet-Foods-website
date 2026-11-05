import React from 'react';
import { CONTACT_INFO, getProductWhatsAppUrl, getWhatsAppUrl } from '../data/contactInfo';

/**
 * Clean SVG WhatsApp Logo
 */
export const WhatsAppIcon = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`whatsapp-svg-icon ${className}`}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.44C8.95 7.44 8.68 7.5 8.46 7.74C8.24 7.97 7.63 8.55 7.63 9.72C7.63 10.9 8.49 12.03 8.61 12.19C8.73 12.35 10.28 14.74 12.65 15.77C13.22 16.01 13.65 16.16 14 16.27C14.58 16.45 15.11 16.43 15.53 16.36C16 16.29 16.97 15.77 17.17 15.2C17.38 14.64 17.38 14.16 17.31 14.05C17.25 13.94 17.08 13.88 16.83 13.76C16.58 13.63 15.35 13.03 15.12 12.95C14.89 12.86 14.73 12.82 14.56 13.07C14.4 13.31 13.92 13.88 13.78 14.05C13.63 14.21 13.48 14.23 13.23 14.11C12.98 13.98 11.93 13.64 10.68 12.52C9.7 11.65 9.04 10.57 8.92 10.36C8.8 10.16 8.91 10.05 9.03 9.93C9.14 9.82 9.28 9.63 9.4 9.49C9.53 9.35 9.57 9.24 9.65 9.08C9.73 8.91 9.69 8.77 9.63 8.65C9.57 8.53 9.15 7.49 8.98 7.07C8.8 6.64 8.64 6.7 8.5 6.7C8.38 6.7 8.24 6.7 8.1 6.7L9.11 7.44Z" />
  </svg>
);

/**
 * Reusable WhatsApp Button Component
 * Works seamlessly on Android, iOS, and Desktop
 */
const WhatsAppButton = ({
  productName,
  customMessage,
  variant = 'primary', // 'primary', 'header', 'card', 'floating', 'outline'
  children,
  className = '',
  ariaLabel,
  showIcon = true,
  iconSize = 20,
}) => {
  const url = productName
    ? getProductWhatsAppUrl(productName)
    : customMessage
    ? getWhatsAppUrl(customMessage)
    : CONTACT_INFO.whatsappUrl;

  const defaultLabel = productName
    ? `Enquire about ${productName} on WhatsApp`
    : 'Order on WhatsApp';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || defaultLabel}
      className={`btn-whatsapp btn-whatsapp-${variant} ${className}`}
    >
      {showIcon && <WhatsAppIcon size={iconSize} />}
      {children && <span className="whatsapp-btn-text">{children}</span>}
    </a>
  );
};

export default WhatsAppButton;


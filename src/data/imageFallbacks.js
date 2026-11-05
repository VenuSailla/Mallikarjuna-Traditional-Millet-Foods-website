/**
 * Image fallback helper to ensure no broken images appear
 */

export const getPlaceholderSvg = (title, color = '#245C35', bgColor = '#F5E8D0') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="none">
    <rect width="800" height="600" fill="${bgColor}"/>
    <circle cx="400" cy="270" r="140" fill="${color}" fill-opacity="0.12"/>
    <path d="M400 160C400 160 440 230 440 300C440 350 400 390 400 450" stroke="${color}" stroke-width="8" stroke-linecap="round"/>
    <path d="M400 220C360 200 310 200 310 240C310 280 360 280 400 250" fill="${color}"/>
    <path d="M400 270C440 250 490 250 490 290C490 330 440 330 400 300" fill="${color}"/>
    <path d="M400 320C360 300 310 300 310 340C310 380 360 380 400 350" fill="${color}"/>
    <path d="M400 370C440 350 490 350 490 390C490 430 440 430 400 400" fill="${color}"/>
    <text x="50%" y="520" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#35251D">${title}</text>
    <text x="50%" y="555" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="600" fill="${color}">Mallikarjuna Traditional Millet Foods</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const handleImageError = (e, fallbackTitle = 'Traditional Millet Foods') => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = getPlaceholderSvg(fallbackTitle);
};


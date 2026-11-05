# Mallikarjuna Traditional Millet Foods - Website

A modern, responsive, and static business website for **Mallikarjuna Traditional Millet Foods**, promoting traditional Indian millet foods and empowering customers to order and enquire directly via WhatsApp.

---

## 🌾 Business Information
- **Business Name:** Mallikarjuna Traditional Millet Foods
- **Phone:** +91 9908372515
- **WhatsApp:** +91 9908372515
- **Email:** [saillavenu012@gmail.com](mailto:saillavenu012@gmail.com)
- **WhatsApp Direct Link:** https://wa.me/919908372515

*(All contact details are centralized in `src/data/contactInfo.js` for instant updates).*

---

## 🎨 Theme & Color Palette
- **Dark Green:** `#245C35` (Primary brand color)
- **Light Green:** `#E8F2E5` (Secondary accents & badges)
- **Millet Beige:** `#F5E8D0` (Traditional earth tones)
- **Golden Yellow:** `#D9A441` (Warm harvest highlights)
- **White:** `#FFFFFF` (Clean backgrounds)
- **Dark Brown:** `#35251D` (Deep rustic typography & footer)

---

## 🚀 Key Features

1. **Sticky Header & Mobile Navigation:**
   - Responsive brand header with millet icon motif.
   - Quick navigation links: Home, About Us, Products, Benefits, Gallery, Contact.
   - Header WhatsApp CTA button.
   - Smooth slide-in mobile drawer menu with automatic close on link selection.

2. **Hero Section:**
   - Headline: *"Healthy Living Starts with Traditional Millets"*
   - Subtitle celebrating natural taste and everyday healthy living.
   - Dual Call-to-Action: *"Explore Our Products"* and *"Order on WhatsApp"*.
   - Highlights: Traditional Food, Natural Ingredients, Authentic Taste.
   - Earthen pottery & millet food showcase imagery.

3. **About Us Section:**
   - Mission statement celebrating Indian millet culinary heritage.
   - Traditional clay pot preparation imagery.
   - Direct button link to products.

4. **Products Showcase:**
   - 6 traditional millet foods:
     - **Ragi Java** (Traditional finger millet porridge)
     - **Ragi Roti** (Traditional finger millet flatbread)
     - **Jowar Roti** (Traditional sorghum flatbread)
     - **Bajra Foods** (Traditional pearl millet food options)
     - **Millet Flour** (Traditional millet flour for everyday cooking)
     - **Other Millet Foods** (Foxtail, Little, Kodo, and Barnyard millets)
   - Every product card includes high-quality food photography, description, "Contact for Price", and an *"Enquire on WhatsApp"* button that pre-fills the message:
     `Hello, I am interested in ordering [Product Name]. Please share the price and availability.`

5. **Why Choose Us (Benefits):**
   - 6 icon cards strictly adhering to authentic food values (no medical or disease claims):
     1. Traditional Food Culture
     2. Natural Millet Ingredients
     3. Rich in Dietary Fibre
     4. Variety of Millet Foods
     5. Traditional Taste
     6. Everyday Food Choices

6. **Interactive Image Gallery:**
   - 6 authentic items: Ragi Java preparation, Ragi Roti, Jowar Roti, Millet grains, Traditional cooking, Different millet varieties.
   - Hover zoom effects, category badges.
   - Interactive Lightbox modal with large view, keyboard support (`Escape`, `ArrowLeft`, `ArrowRight`), next/prev controls, and close button.

7. **WhatsApp Integration:**
   - Floating WhatsApp button with pulse animation at bottom-right corner.
   - Header WhatsApp button.
   - Product-specific enquiry buttons on all cards.
   - Contact section WhatsApp card.
   - Footer WhatsApp link.
   - Properly encoded URLs with `encodeURIComponent()`.

8. **Contact Section:**
   - 3 clean contact cards: Call Now (`tel:+919908372515`), WhatsApp Us, and Email Us (`mailto:saillavenu012@gmail.com`).

9. **Professional Footer:**
   - Logo, business quote, quick navigation, product quick links, dynamic copyright year, and Back to Top action.

10. **SEO & Performance:**
    - Proper `<title>` and `<meta name="description">` tags.
    - Semantic HTML5 structure.
    - Responsive across Mobile, Tablet, and Desktop.

---

## 📁 Project Structure

```
venu-milletes/
├── public/
│   └── favicon.svg               # Millet grain SVG favicon
├── src/
│   ├── assets/                   # Static media
│   ├── components/
│   │   ├── Header.jsx            # Sticky responsive header & mobile menu
│   │   ├── Hero.jsx              # Hero showcase & highlights
│   │   ├── About.jsx             # About heritage section
│   │   ├── Products.jsx          # Product list container & custom order banner
│   │   ├── ProductCard.jsx       # Individual product card with WhatsApp enquiry
│   │   ├── Benefits.jsx          # Why choose us 6-card grid
│   │   ├── Gallery.jsx           # Responsive gallery with Lightbox modal
│   │   ├── Contact.jsx           # 3 contact cards (Phone, WhatsApp, Email)
│   │   ├── Footer.jsx            # Multi-column footer with dynamic year
│   │   └── WhatsAppButton.jsx    # Reusable WhatsApp CTA component
│   ├── data/
│   │   ├── contactInfo.js        # Centralized business phone, WhatsApp, email
│   │   ├── products.js           # 6 specified traditional millet products
│   │   ├── benefits.js           # 6 benefits (no medical claims)
│   │   ├── gallery.js            # 6 gallery items
│   │   └── imageFallbacks.js     # Graceful SVG placeholder fallbacks
│   ├── App.jsx                   # Main layout container & floating WhatsApp
│   ├── index.css                 # Premium custom design system & responsive CSS
│   └── main.jsx                  # React application entry point
├── index.html                    # SEO meta tags, Google Fonts
├── package.json
└── vite.config.js
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

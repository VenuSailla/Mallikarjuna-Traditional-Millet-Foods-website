# Mallikarjuna Traditional Millet Foods - Website

A modern, responsive, and static business website for **Mallikarjuna Traditional Millet Foods**, promoting traditional Indian millet foods and empowering customers to enquire and order directly through **WhatsApp** and **EmailJS**.

---

## 🌾 Business Contact Details
- **Business Name:** Mallikarjuna Traditional Millet Foods
- **Phone:** +91 9908372515
- **WhatsApp:** +91 9908372515
- **Email:** [saillavenu012@gmail.com](mailto:saillavenu012@gmail.com)
- **WhatsApp Direct Link:** https://wa.me/919908372515

---

## 📬 EmailJS Integration

Customer enquiries from the Contact Form are dispatched directly to `saillavenu012@gmail.com` using `@emailjs/browser`.

### Configuration
Credentials are read dynamically using `import.meta.env` in [`src/config/emailConfig.js`](file:///c:/Users/saill/OneDrive/Desktop/venu%20milletes/src/config/emailConfig.js).

Create a `.env` file in the project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### EmailJS Dashboard Setup Guide
1. Log in to [EmailJS Dashboard](https://dashboard.emailjs.com/).
2. Under **Email Services**, add an active service (e.g., Gmail connecting to `saillavenu012@gmail.com`) and copy the **Service ID**.
3. Under **Email Templates**, create a new template with:
   - **Subject:** `New Customer Enquiry – Mallikarjuna Traditional Millet Foods`
   - **Content:**
     ```
     New customer enquiry received.

     Customer Name: {{from_name}}
     Customer Email: {{from_email}}
     Phone Number: {{phone}}
     Interested Product: {{product}}
     Message: {{message}}

     Reply to the customer using the provided email address or phone number.
     ```
   - Copy the **Template ID**.
4. In **Account Settings** → **API Keys**, copy your **Public Key**.
5. Paste these into your `.env` file and restart Vite (`npm run dev`).

---

## 💬 WhatsApp Integration

WhatsApp messaging is implemented with JavaScript via `src/components/WhatsAppButton.jsx` and `openWhatsApp()`:

```javascript
const openWhatsApp = (message) => {
  const phone = "919908372515";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
```

### Placements:
- **Header:** Quick order button in desktop navigation and mobile drawer.
- **Hero Section:** Primary "Order on WhatsApp" CTA.
- **Product Cards:** Each of the 6 product cards has an "Enquire on WhatsApp" button pre-filling the exact product:
  `Hello, I am interested in [Product Name]. Please share the price and availability.`
- **Contact Section:** Dedicated highlighted WhatsApp contact card.
- **Floating Button:** Floating pulse button at the bottom-right corner.

---

## 🎨 Theme & Color Palette
- **Dark Green:** `#245C35` (Primary brand color)
- **Light Green:** `#E8F2E5` (Secondary accents & badges)
- **Millet Beige:** `#F5E8D0` (Traditional earth tones)
- **Golden Yellow:** `#D9A441` (Warm harvest highlights)
- **White:** `#FFFFFF` (Clean backgrounds)
- **Dark Brown:** `#35251D` (Deep rustic typography & footer)

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your EmailJS credentials:
```bash
cp .env.example .env
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

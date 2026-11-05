import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { Sparkles, MessageCircleQuestion } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-pill">
            <Sparkles size={14} />
            <span>Farm to Kitchen Purity</span>
          </div>
          <h2 className="section-title">Our Traditional Millet Foods</h2>
          <p className="section-subtitle">
            Explore our collection of traditional and delicious millet foods.
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner for Custom Orders / Bulk Enquiries */}
        <div className="products-bottom-banner">
          <div className="banner-content">
            <div className="banner-icon-box">
              <MessageCircleQuestion size={28} />
            </div>
            <div>
              <h3>Looking for custom quantities or daily subscriptions?</h3>
              <p>Contact us on WhatsApp to discuss your family's traditional millet food requirements.</p>
            </div>
          </div>
          <WhatsAppButton
            customMessage="Hello Mallikarjuna Traditional Millet Foods, I would like to enquire about custom daily millet meals and bulk orders."
            variant="primary"
            iconSize={20}
          >
            Chat with Us
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default Products;


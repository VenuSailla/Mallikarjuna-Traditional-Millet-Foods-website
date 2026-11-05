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
              <h3>Looking for daily subscriptions in Karimnagar City?</h3>
              <p>Freshly prepared traditional millet foods available exclusively within Karimnagar city.</p>
            </div>
          </div>
          <WhatsAppButton
            customMessage="Hello Mallikarjuna Traditional Millet Foods, I am located in Karimnagar City and would like to enquire about daily millet meals and orders."
            variant="primary"
            iconSize={20}
          >
            Order in Karimnagar
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default Products;


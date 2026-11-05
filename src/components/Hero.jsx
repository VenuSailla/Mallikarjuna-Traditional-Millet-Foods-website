import React from 'react';
import { Sparkles, Utensils, Heart, ArrowRight } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { handleImageError } from '../data/imageFallbacks';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} className="badge-icon" />
              <span>Authentic Indian Heritage</span>
            </div>

            <h1 className="hero-title">
              Healthy Living Starts with{' '}
              <span className="hero-title-highlight">Traditional Millets</span>
            </h1>

            <p className="hero-subtitle">
              Discover the traditional taste of millet foods. Fresh, natural and prepared with
              traditional care for everyday healthy living.
            </p>

            {/* Call To Action Buttons */}
            <div className="hero-actions">
              <a href="#products" className="btn btn-secondary-outline">
                <span>Explore Our Products</span>
                <ArrowRight size={18} />
              </a>
              <WhatsAppButton variant="primary" iconSize={20}>
                Order on WhatsApp
              </WhatsAppButton>
            </div>

            {/* Small Highlights Required in Section 5 */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <Utensils size={18} />
                </div>
                <div>
                  <h4 className="highlight-title">Traditional Food</h4>
                  <p className="highlight-text">Centuries of heritage recipes</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="highlight-title">Natural Ingredients</h4>
                  <p className="highlight-text">Pure, wholesome grains</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <Heart size={18} />
                </div>
                <div>
                  <h4 className="highlight-title">Authentic Taste</h4>
                  <p className="highlight-text">Comforting home-style flavor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Showcase Imagery */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-decor-ring"></div>
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"
                alt="Wholesome traditional Ragi Java and millet grains meal"
                className="hero-main-img"
                loading="eager"
                onError={(e) => handleImageError(e, 'Traditional Millet Foods')}
              />
              
              {/* Floating Pill Card 1: Ragi Java & Roti */}
              <div className="floating-badge badge-top-right">
                <span className="badge-bullet">🌾</span>
                <div>
                  <strong>Fresh Ragi Java & Rotis</strong>
                  <small>Prepared with Traditional Care</small>
                </div>
              </div>

              {/* Floating Pill Card 2: 100% Wholesome */}
              <div className="floating-badge badge-bottom-left">
                <span className="badge-bullet">✨</span>
                <div>
                  <strong>100% Pure Millets</strong>
                  <small>No Preservatives Added</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

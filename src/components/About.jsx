import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { handleImageError } from '../data/imageFallbacks';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Traditional Food Preparation Visual */}
          <div className="about-visual">
            <div className="about-image-card">
              <img
                src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=900&q=80"
                alt="Traditional Indian millet food preparation using earthen cookware"
                className="about-image"
                loading="lazy"
                onError={(e) => handleImageError(e, 'Traditional Preparation')}
              />
              <div className="about-experience-tag">
                <span className="exp-years">Heritage</span>
                <span className="exp-label">Traditional Indian Kitchen Wisdom</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative Content */}
          <div className="about-content">
            <div className="section-pill">Our Heritage & Mission</div>
            <h2 className="section-title">About Mallikarjuna Traditional Millet Foods</h2>
            
            <p className="about-description">
              Welcome to Mallikarjuna Traditional Millet Foods. We believe in bringing traditional
              Indian millet foods back to everyday life. Our aim is to offer delicious traditional
              food options made with millet ingredients while celebrating our food culture and
              traditions.
            </p>

            <div className="about-features-list">
              <div className="about-feature">
                <CheckCircle2 className="about-check-icon" size={20} />
                <div>
                  <strong>Rooted in Heritage</strong>
                  <p>Reconnecting modern lifestyle with ancient South Indian grain wisdom.</p>
                </div>
              </div>

              <div className="about-feature">
                <ShieldCheck className="about-check-icon" size={20} />
                <div>
                  <strong>Pure & Natural Preparation</strong>
                  <p>Minimally processed, whole grain ingredients crafted with uncompromised care.</p>
                </div>
              </div>

              <div className="about-feature">
                <HeartHandshake className="about-check-icon" size={20} />
                <div>
                  <strong>Direct Customer Care</strong>
                  <p>Every meal is prepared fresh, with direct personal ordering via WhatsApp.</p>
                </div>
              </div>
            </div>

            <div className="about-action">
              <a href="#products" className="btn btn-primary">
                <span>Explore Our Products</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { BENEFITS } from '../data/benefits';
import {
  Sparkles,
  Leaf,
  Flame,
  Layers,
  HeartHandshake,
  SunMedium,
  CheckCircle,
} from 'lucide-react';

const ICON_MAP = {
  Sparkles: Sparkles,
  Leaf: Leaf,
  Flame: Flame,
  Layers: Layers,
  HeartHandshake: HeartHandshake,
  SunMedium: SunMedium,
};

const Benefits = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header text-center">
          <div className="section-pill">
            <CheckCircle size={14} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">Why Choose Traditional Millet Foods?</h2>
          <p className="section-subtitle">
            Embrace wholesome, time-honored Indian grains prepared with authenticity and everyday
            care.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="benefits-grid">
          {BENEFITS.map((item) => {
            const IconComponent = ICON_MAP[item.iconName] || Sparkles;
            return (
              <div key={item.id} className="benefit-card">
                <div className="benefit-icon-wrapper">
                  <IconComponent className="benefit-icon" size={28} />
                </div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;


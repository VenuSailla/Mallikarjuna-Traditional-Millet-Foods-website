import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { Tag } from 'lucide-react';
import { handleImageError } from '../data/imageFallbacks';

const ProductCard = ({ product }) => {
  const { name, tag, shortDescription, priceText, image, alt, highlights } = product;

  return (
    <article className="product-card" id={`product-${product.id}`}>
      <div className="product-image-container">
        <img
          src={image}
          alt={alt || name}
          className="product-image"
          loading="lazy"
          onError={(e) => handleImageError(e, name)}
        />
        {tag && (
          <span className="product-badge">
            <Tag size={12} />
            <span>{tag}</span>
          </span>
        )}
      </div>

      <div className="product-body">
        <div className="product-header">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">{priceText}</p>
        </div>

        <p className="product-description">{shortDescription}</p>

        {highlights && highlights.length > 0 && (
          <ul className="product-highlights">
            {highlights.map((item, index) => (
              <li key={index} className="product-highlight-pill">
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="product-footer">
          <WhatsAppButton
            productName={name}
            variant="card"
            className="w-full"
            iconSize={18}
          >
            Enquire on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

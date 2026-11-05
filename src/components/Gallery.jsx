import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { handleImageError } from '../data/imageFallbacks';

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightbox = (index) => {
    setSelectedIdx(index);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const showNext = () => {
    setSelectedIdx((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const showPrev = () => {
    setSelectedIdx((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIdx]);

  const activeItem = selectedIdx !== null ? GALLERY_ITEMS[selectedIdx] : null;

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-pill">
            <Camera size={14} />
            <span>Visual Heritage</span>
          </div>
          <h2 className="section-title">Our Traditional Food Gallery</h2>
          <p className="section-subtitle">
            Explore authentic moments of millet preparations, natural grains, and traditional
            cooking craft.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item-card"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View larger image of ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="gallery-image"
                  loading="lazy"
                  onError={(e) => handleImageError(e, item.title)}
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span className="gallery-cat-badge">{item.category}</span>
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <div className="gallery-zoom-icon">
                      <Maximize2 size={18} />
                      <span>Click to View</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
          >
            {/* Close Button */}
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous Navigation */}
            <button
              type="button"
              className="lightbox-nav-btn lightbox-prev"
              onClick={showPrev}
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Modal Image & Caption */}
            <div className="lightbox-content">
              <div className="lightbox-image-box">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  className="lightbox-image"
                  onError={(e) => handleImageError(e, activeItem.title)}
                />
              </div>
              <div className="lightbox-caption">
                <span className="lightbox-category">{activeItem.category}</span>
                <h3 className="lightbox-title">{activeItem.title}</h3>
                <p className="lightbox-description">{activeItem.description}</p>
                <div className="lightbox-counter">
                  {selectedIdx + 1} of {GALLERY_ITEMS.length}
                </div>
              </div>
            </div>

            {/* Next Navigation */}
            <button
              type="button"
              className="lightbox-nav-btn lightbox-next"
              onClick={showNext}
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/gallery';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Hospital Training', 'Laboratories', 'Classrooms', 'Graduation', 'Events'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Campus & Clinical Life</span>
          </div>
          <h2 className="section-title">
            State-of-the-Art Labs & Real Hospital Rotations.
          </h2>
          <p className="section-description" style={{ marginTop: '14px' }}>
            A glimpse into the daily life of ASCENDRA healthcare students across simulation rooms, 
            operation suites, and hospital clinical wards.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="course-filters" style={{ marginBottom: '36px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`gallery-item ${item.span ? 'span-2' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setActiveItem(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-cat">{item.category}</span>
                <div className="gallery-title">{item.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', marginTop: '4px', opacity: 0.9 }}>
                  <Maximize2 size={13} />
                  <span>Click to expand view</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="modal-backdrop" onClick={() => setActiveItem(null)}>
            <motion.div
              className="modal-content"
              style={{ maxWidth: '800px', padding: '16px', overflow: 'hidden' }}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <button
                className="modal-close"
                onClick={() => setActiveItem(null)}
                style={{ zIndex: 10, background: '#FFFFFF' }}
                aria-label="Close image lightbox"
              >
                <X size={20} />
              </button>

              <img
                src={activeItem.image}
                alt={activeItem.title}
                style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
              />

              <div style={{ padding: '20px 8px 8px' }}>
                <span className="badge badge-teal" style={{ marginBottom: '8px' }}>{activeItem.category}</span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-secondary)', marginTop: '4px', marginBottom: '6px' }}>
                  {activeItem.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

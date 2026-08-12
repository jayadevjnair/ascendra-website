import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="section-padding bg-alt">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Alumni Stories & Global Placements</span>
          </div>
          <h2 className="section-title">
            From ASCENDRA Classrooms to World-Class Hospitals.
          </h2>
          <p className="section-description" style={{ marginTop: '14px' }}>
            Discover how our clinical immersion and international placement guidance shaped 
            the careers of healthcare professionals worldwide.
          </p>
        </div>

        {/* Testimonial Spotlight Card */}
        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="testimonial-card"
            style={{ padding: '48px 40px', minHeight: '340px' }}
          >
            {/* Top Row: Stars & Quote Icon */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div className="testimonial-stars">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <div style={{ color: 'var(--color-primary)', opacity: 0.3 }}>
                <Quote size={44} />
              </div>
            </div>

            {/* Quote Body */}
            <p className="testimonial-quote" style={{ fontSize: '1.2rem', color: 'var(--color-secondary)' }}>
              "{current.quote}"
            </p>

            {/* Author Footer */}
            <div className="testimonial-author">
              <div className="author-info">
                <h4>{current.name}</h4>
                <p>{current.course} • <span style={{ color: 'var(--color-primary-dark)' }}>{current.year}</span></p>
                <div className="author-workplace">
                  <Building2 size={13} />
                  <span>{current.workplace} ({current.country})</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Navigation Controls */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '16px', 
              marginTop: '28px' 
            }}
          >
            <button
              onClick={prevTestimonial}
              className="btn btn-secondary btn-sm"
              style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: currentIndex === idx ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    background: currentIndex === idx ? 'var(--color-primary)' : '#cbd5e1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="btn btn-secondary btn-sm"
              style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

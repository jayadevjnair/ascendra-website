import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/faqs';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Admissions', 'Clinical Training', 'Placements', 'Modes & Campus'];

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory === 'All') return true;
    return faq.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked Questions.
          </h2>
          <p className="section-description" style={{ marginTop: '14px' }}>
            Everything you need to know about our healthcare diploma programs, hospital rotations, 
            fees, and international career assistance.
          </p>
        </div>

        {/* Categories */}
        <div className="course-filters" style={{ marginBottom: '32px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Wrap */}
        <div className="faq-wrap">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q">{faq.question}</span>
                  <ChevronDown className="faq-icon" size={20} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

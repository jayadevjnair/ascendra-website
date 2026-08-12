import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hospital, 
  UserCheck, 
  Award, 
  Laptop, 
  School, 
  Compass, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';

interface WhyAscendraProps {
  onApplyClick: () => void;
}

export const WhyAscendra: React.FC<WhyAscendraProps> = ({ onApplyClick }) => {
  const features = [
    {
      icon: <Hospital size={28} />,
      title: 'Hospital Training',
      tag: 'Clinical Rotations',
      description: 'Hands-on patient care and surgical theatre training aligned with NABH & JCI accredited multi-specialty standards.',
    },
    {
      icon: <UserCheck size={28} />,
      title: 'Expert Faculty',
      tag: 'Master Clinicians',
      description: 'Learn directly from practicing surgeons, nephrologists, senior paramedics, and hospital directors with decades of healthcare experience.',
    },
    {
      icon: <Award size={28} />,
      title: 'Industry Certification',
      tag: 'Recognized Worldwide',
      description: 'Earn prestigious government-aligned and international healthcare credentials recognized by employers in India, the Gulf, and Europe.',
    },
    {
      icon: <Laptop size={28} />,
      title: 'Online Learning',
      tag: '24/7 Digital LMS',
      description: 'High-definition live masterclasses, recorded case walkthroughs, AI-driven practice assessments, and continuous faculty support.',
    },
    {
      icon: <School size={28} />,
      title: 'Offline Classes',
      tag: 'Kottayam Campus',
      description: 'Immersive smart classrooms, medical mannequin simulation labs, and interactive group discussions at our modern Kottayam institute.',
    },
    {
      icon: <Compass size={28} />,
      title: 'Career Support',
      tag: 'Placement & Licensing',
      description: 'Dedicated placement cell providing DHA/HAAD exam prep, OET coaching, resume packaging, and guaranteed interview opportunities.',
    },
  ];

  return (
    <section className="section-padding bg-white" id="why-ascendra">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Why Choose ASCENDRA</span>
          </div>
          <h2 className="section-title">
            The Gold Standard in Healthcare Career Preparation.
          </h2>
          <p className="section-description" style={{ marginTop: '14px' }}>
            We combine rigorous medical pedagogy, state-of-the-art simulation technology, 
            and deep hospital integration to elevate your healthcare journey.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="feature-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="feature-icon-wrapper">
                  {item.icon}
                </div>
                <span className="badge badge-teal">{item.tag}</span>
              </div>

              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          style={{
            marginTop: '48px',
            background: 'var(--color-bg-alt)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 style={{ color: 'var(--color-secondary)', fontSize: '1.125rem', fontWeight: 700 }}>
              Ready to begin your healthcare career in India and Abroad?
            </h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', marginTop: '4px' }}>
              Admissions are now open for the 2026 Diploma & Certification batches.
            </p>
          </div>

          <button className="btn btn-primary" onClick={onApplyClick}>
            <span>Apply Online Today</span>
            <ArrowUpRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

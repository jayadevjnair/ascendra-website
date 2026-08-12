import React from 'react';
import { motion } from 'framer-motion';
import { School, Laptop, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface LearningModesProps {
  onApplyClick: () => void;
}

export const LearningModes: React.FC<LearningModesProps> = ({ onApplyClick }) => {
  return (
    <section id="modes" className="section-padding bg-alt">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Hybrid Education Architecture</span>
          </div>
          <h2 className="section-title">
            Flexible Learning Modes Tailored for Modern Students.
          </h2>
          <p className="section-description" style={{ marginTop: '14px' }}>
            Choose between full campus immersion at our Kottayam simulation institute 
            or flexible online live masterclasses paired with mandatory hospital postings.
          </p>
        </div>

        {/* Split Grid */}
        <div className="modes-grid">
          
          {/* Card 1: Offline Learning */}
          <motion.div
            className="mode-card"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mode-img-frame">
              <img
                src="/offlinecampus2.png"
                alt="Real classroom and medical mannequin training at ASCENDRA Kottayam"
              />
              <div className="mode-tag-overlay">
                <span className="badge badge-teal" style={{ background: '#FFFFFF', color: 'var(--color-secondary)', boxShadow: 'var(--shadow-md)' }}>
                  <School size={14} color="var(--color-primary)" />
                  <span>Kottayam Central Campus</span>
                </span>
              </div>
            </div>

            <div className="mode-body">
              <h3 className="mode-title">Offline Campus Learning</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Full-time interactive classroom experience in Kottayam with hands-on medical mannequin simulations, 
                sterile OT theatre environments, and direct clinician supervision.
              </p>

              <ul className="mode-features">
                <li className="mode-feature-item">
                  <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span>Smart Simulation Labs with high-fidelity medical mannequins</span>
                </li>
                <li className="mode-feature-item">
                  <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span>Direct daily clinical rounds in partner multi-speciality hospitals</span>
                </li>
                <li className="mode-feature-item">
                  <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span>Hostel accommodation and campus student community in Kottayam</span>
                </li>
                <li className="mode-feature-item">
                  <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span>Peer group case studies & mock emergency trauma drills</span>
                </li>
              </ul>

              <div style={{ marginTop: '28px' }}>
                <button className="btn btn-secondary btn-sm" onClick={onApplyClick} style={{ width: '100%' }}>
                  <span>Apply for Campus Batch</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Online Learning */}
          <motion.div
            className="mode-card"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mode-img-frame">
              <img
                src="/onlineclass.png"
                alt="Student attending live online healthcare masterclass"
              />
              <div className="mode-tag-overlay">
                <span className="badge badge-teal" style={{ background: '#FFFFFF', color: 'var(--color-secondary)', boxShadow: 'var(--shadow-md)' }}>
                  <Laptop size={14} color="var(--color-primary)" />
                  <span>Live Interactive LMS</span>
                </span>
              </div>
            </div>

            <div className="mode-body">
              <h3 className="mode-title">Online & Hybrid Learning</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Ideal for working professionals, degree students, and outstation candidates. Access live high-definition 
                lectures, recorded archives, and schedule intensive hospital postings at your convenience.
              </p>

              <ul className="mode-features">
                <li className="mode-feature-item">
                  <CheckCircle2 size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                  <span>Live streaming interactive masterclasses with top medical specialists</span>
                </li>
                <li className="mode-feature-item">
                  <CheckCircle2 size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                  <span>24/7 Digital portal with downloadable lecture notes and case archives</span>
                </li>
                <li className="mode-feature-item">
                  <CheckCircle2 size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                  <span>Flexible weekend clinical practical sessions at partner hospital networks</span>
                </li>
                <li className="mode-feature-item">
                  <CheckCircle2 size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                  <span>AI-powered self-assessment quizzes and 1-on-1 mentor doubt resolution</span>
                </li>
              </ul>

              <div style={{ marginTop: '28px' }}>
                <button className="btn btn-primary btn-sm" onClick={onApplyClick} style={{ width: '100%' }}>
                  <span>Enroll in Online Track</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

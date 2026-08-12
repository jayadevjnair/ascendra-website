import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  ArrowRight, 
  Award, 
  BookOpen, 
  Briefcase, 
  Stethoscope,
  Globe2,
  Sparkles
} from 'lucide-react';

interface AboutProps {
  onApplyClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onApplyClick }) => {
  const [showFullStory, setShowFullStory] = useState(false);

  const pillars = [
    {
      icon: <Stethoscope size={20} />,
      title: 'Healthcare Education',
      desc: 'Industry-standard curricula curated by practicing doctors and healthcare educators.'
    },
    {
      icon: <Award size={20} />,
      title: 'Skill Development',
      desc: 'Intensive clinical simulations, sterile protocols, and critical patient-handling drills.'
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Offline & Online Learning',
      desc: 'Smart campus simulation labs in Kottayam combined with a flexible 24/7 digital LMS.'
    },
    {
      icon: <Building2 size={20} />,
      title: 'Clinical Exposure',
      desc: 'Hands-on clinical training aligned with industry and hospital standards.'
    },
    {
      icon: <Globe2 size={20} />,
      title: 'Career Guidance',
      desc: 'Dedicated coaching for DHA, HAAD, OET, IELTS, and international licensing pathways.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Placement Support',
      desc: 'Guaranteed recruitment drives linking our graduates to top hospitals in India and abroad.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-alt">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column: Visual with Campus Location Badge */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-img-frame">
              <img
                src="/about1.png"
                alt="ASCENDRA Healthcare Students Training in Clinical Lab"
              />
              
              {/* Kottayam Kerala Location Badge */}
              <div className="about-location-badge">
                <div style={{ background: 'var(--color-primary)', padding: '8px', borderRadius: '8px', display: 'flex' }}>
                  <MapPin size={20} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9375rem' }}>Central Campus & Simulation Labs</div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Kottayam, Kerala • Connected Globally</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">
              <Sparkles size={14} />
              <span>Who We Are</span>
            </div>

            <h2 className="section-title" style={{ marginBottom: '18px' }}>
              Redefining Healthcare Education for the Next Generation of Medical Professionals.
            </h2>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem', lineHeight: '1.7', marginBottom: '16px' }}>
              Headquartered in the educational heartland of <strong>Kottayam, Kerala</strong>, <strong>ASCENDRA</strong> is 
              not a conventional coaching center. We are an avant-garde healthcare education and clinical skill development 
              powerhouse dedicated to bridging the critical gap between academic theory and real-world clinical excellence.
            </p>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.65', marginBottom: '24px' }}>
              Through rigorous hands-on clinical rotations, simulation suites, and globally recognized curriculum standards, 
              we prepare compassionate, high-performing paramedical and healthcare leaders ready for immediate employment across 
              India, the Middle East, the UK, and Europe.
            </p>

            {/* 6 Highlighted Pillars Grid */}
            <div className="about-highlights-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="about-highlight-card">
                  <div className="about-highlight-icon">
                    {pillar.icon}
                  </div>
                  <div>
                    <div className="about-highlight-text">{pillar.title}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)', marginTop: '2px', lineHeight: '1.4' }}>
                      {pillar.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Read More Accordion & Actions */}
            {showFullStory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                style={{
                  background: '#FFFFFF',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  marginBottom: '24px',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.65'
                }}
              >
                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '8px', fontWeight: 700 }}>Our Vision & Institutional Philosophy</h4>
                <p style={{ marginBottom: '10px' }}>
                  Healthcare is evolving rapidly with robotic surgeries, automated diagnostic analyzers, and strict NABH/JCI quality protocols. ASCENDRA was established to ensure that every student receives direct mentorship from certified senior practitioners and gains extensive hospital exposure before stepping onto the healthcare frontline.
                </p>
                <p>
                  Whether you choose our flexible hybrid online format or our full-time immersive Kottayam campus program, our dedicated placement cell mentors you from Day 1 through licensing examinations, interview simulations, and successful career onboarding.
                </p>
              </motion.div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setShowFullStory(!showFullStory)}
              >
                <span>{showFullStory ? 'Show Less' : 'Read Our Full Story'}</span>
              </button>

              <button
                className="btn btn-primary btn-sm"
                onClick={onApplyClick}
              >
                <span>Join ASCENDRA</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

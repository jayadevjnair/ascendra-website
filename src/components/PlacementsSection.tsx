import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  BookOpenCheck, 
  Hospital, 
  CheckSquare, 
  UserCheck2, 
  Briefcase, 
  ArrowRight,
  TrendingUp,
  Award,
  Globe2
} from 'lucide-react';

interface PlacementsProps {
  onApplyClick: () => void;
}

export const PlacementsSection: React.FC<PlacementsProps> = ({ onApplyClick }) => {
  const timelineSteps = [
    {
      step: '1',
      title: 'Training',
      icon: <BookOpenCheck size={20} />,
      desc: 'Rigorous theoretical grounding, clinical pathology, patient ethics, and infection control in smart Kottayam labs.'
    },
    {
      step: '2',
      title: 'Hospital Exposure',
      icon: <Hospital size={20} />,
      desc: 'Hands-on clinical internship in multi-specialty partner hospitals assisting in live surgeries, dialysis, & trauma.'
    },
    {
      step: '3',
      title: 'Skill Assessment',
      icon: <CheckSquare size={20} />,
      desc: 'Objective Structured Clinical Examinations (OSCE) and real-time practical evaluations by medical boards.'
    },
    {
      step: '4',
      title: 'Interview Preparation',
      icon: <UserCheck2 size={20} />,
      desc: 'Resume building, healthcare behavioral interviews, mock medical panels, and OET/IELTS English guidance.'
    },
    {
      step: '5',
      title: 'Placement Assistance',
      icon: <Briefcase size={20} />,
      desc: 'Direct campus hiring drives with leading hospital networks across Kerala, PAN-India, GCC, and Europe.'
    }
  ];

  return (
    <section id="placements" className="section-padding placements-section">
      {/* Background Ambient Lights */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          left: '20%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.16) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <div className="section-tag section-tag-dark">
            <Sparkles size={14} />
            <span>Dedicated Placement Cell</span>
          </div>
          <h2 className="section-title section-title-dark">
            Career Support That Goes Beyond Education.
          </h2>
          <p className="section-description section-description-dark" style={{ marginTop: '14px' }}>
            Our structured 5-stage career acceleration roadmap ensures that every student transitions 
            from classroom novice to confident, sought-after healthcare practitioner.
          </p>
        </div>

        {/* 5-Stage Timeline */}
        <div className="placements-timeline">
          <div className="timeline-connector" />

          {timelineSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="timeline-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="timeline-step-badge">
                {step.step}
              </div>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Placement Metrics Row */}
        <div className="placement-stats-row">
          <div className="placement-stat-box">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px', color: 'var(--color-accent)' }}>
              <TrendingUp size={28} />
            </div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
              95%
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '4px' }}>
              Consistent Placement Record across 2022-2025 batches
            </div>
          </div>

          <div className="placement-stat-box">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px', color: 'var(--color-accent)' }}>
              <Award size={28} />
            </div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
              150+
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '4px' }}>
              Healthcare Employers in India, GCC & the United Kingdom
            </div>
          </div>

          <div className="placement-stat-box">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px', color: 'var(--color-accent)' }}>
              <Globe2 size={28} />
            </div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
              100%
            </div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '4px' }}>
              Licensing Exam Support (DHA, HAAD, MOH, OET, Prometric)
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button className="btn btn-accent btn-lg" onClick={onApplyClick}>
            <span>Join Our Next Healthcare Placement Batch</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

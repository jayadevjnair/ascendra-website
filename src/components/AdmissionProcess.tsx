import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, FileText, MessagesSquare, CheckCircle, GraduationCap, Award, Briefcase, ArrowRight } from 'lucide-react';

interface AdmissionProcessProps {
  onApplyClick: () => void;
}

export const AdmissionProcess: React.FC<AdmissionProcessProps> = ({ onApplyClick }) => {
  const steps = [
    {
      num: '1',
      title: 'Apply',
      icon: <FileText size={18} />,
      desc: 'Submit your online application or visit our Kottayam admissions office.'
    },
    {
      num: '2',
      title: 'Counselling',
      icon: <MessagesSquare size={18} />,
      desc: 'Free academic & career counselling session with medical educators.'
    },
    {
      num: '3',
      title: 'Admission',
      icon: <CheckCircle size={18} />,
      desc: 'Document verification, batch selection & installment enrollment.'
    },
    {
      num: '4',
      title: 'Training',
      icon: <GraduationCap size={18} />,
      desc: 'Smart classroom theory & hands-on hospital rotations.'
    },
    {
      num: '5',
      title: 'Certification',
      icon: <Award size={18} />,
      desc: 'Board assessment and recognized healthcare credentials award.'
    },
    {
      num: '6',
      title: 'Placement',
      icon: <Briefcase size={18} />,
      desc: 'Direct campus interviews & international licensing onboarding.'
    }
  ];

  return (
    <section className="section-padding bg-alt">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Simple 6-Step Roadmap</span>
          </div>
          <h2 className="section-title">
            Your Journey from Aspirant to Certified Healthcare Professional.
          </h2>
          <p className="section-description" style={{ marginTop: '14px' }}>
            A streamlined, transparent admissions and career transition process designed for your success.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="process-grid">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="process-step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="process-num">
                {step.num}
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button className="btn btn-primary" onClick={onApplyClick}>
            <span>Begin Step 1: Submit Application</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

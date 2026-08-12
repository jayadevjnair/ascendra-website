import React from 'react';
import { Hospital, Sparkles } from 'lucide-react';
import { HOSPITAL_PARTNERS } from '../data/partners';

export const HospitalPartners: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeList = [...HOSPITAL_PARTNERS, ...HOSPITAL_PARTNERS];

  return (
    <section className="section-padding bg-white" style={{ borderBottom: '1px solid var(--color-border-light)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 32px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Clinical Collaborations & Placement Network</span>
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            Trusted by Leading Multi-Specialty Hospitals.
          </h2>
          <p className="section-description" style={{ marginTop: '10px', fontSize: '1rem' }}>
            Our students gain real-world exposure and direct campus recruitment at accredited healthcare institutions.
          </p>
        </div>

      </div>

      {/* Infinite Auto-Scrolling Logo Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeList.map((partner, idx) => (
            <div key={idx} className="partner-logo-card">
              <Hospital className="partner-icon" />
              <div>
                <div className="partner-name">{partner.name}</div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                  {partner.location} • {partner.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

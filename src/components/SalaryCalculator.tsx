import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';

interface PathwayData {
  field: string;
  indiaEntry: string;
  indiaSenior: string;
  gulfSalary: string;
  ukEuropeSalary: string;
  licensingExam: string;
  careerGrowth: string;
}

const pathways: PathwayData[] = [
  {
    field: 'Operation Theatre Technician',
    indiaEntry: '₹3,00,000 - ₹4,20,000 / yr',
    indiaSenior: '₹6,50,000 - ₹9,50,000 / yr',
    gulfSalary: 'AED 8,000 - 13,000 / mo (₹1.8L - ₹2.9L/mo)',
    ukEuropeSalary: '£28,000 - £36,000 / yr (₹30L - ₹38L/yr)',
    licensingExam: 'DHA / HAAD (UAE), Prometric (Saudi/Qatar)',
    careerGrowth: '+140% in 3 years with laparoscopic/robotic OT specialization'
  },
  {
    field: 'Dialysis & Renal Care Technologist',
    indiaEntry: '₹3,20,000 - ₹4,50,000 / yr',
    indiaSenior: '₹7,00,000 - ₹10,50,000 / yr',
    gulfSalary: 'SAR 7,000 - 12,000 / mo (₹1.5L - ₹2.6L/mo)',
    ukEuropeSalary: '€34,000 - €42,000 / yr (₹31L - ₹38L/yr)',
    licensingExam: 'Saudi Commission (SCFHS), DHA, NHRA Bahrain',
    careerGrowth: '+160% in 3 years with continuous hemodialysis ICU expertise'
  },
  {
    field: 'Patient Care & Clinical Assistant',
    indiaEntry: '₹2,40,000 - ₹3,60,000 / yr',
    indiaSenior: '₹4,80,000 - ₹6,80,000 / yr',
    gulfSalary: 'AED 6,500 - 10,000 / mo (₹1.4L - ₹2.2L/mo)',
    ukEuropeSalary: '£24,000 - £30,000 / yr (NHS Healthcare Band 3/4)',
    licensingExam: 'OET / IELTS Band 6.5 + International Care Certificate',
    careerGrowth: '+180% via UK NHS fast-track and German nursing assistant routes'
  },
  {
    field: 'Emergency Medical Technician (EMT)',
    indiaEntry: '₹3,00,000 - ₹4,40,000 / yr',
    indiaSenior: '₹6,20,000 - ₹8,50,000 / yr',
    gulfSalary: 'AED 9,000 - 15,000 / mo (₹2.0L - ₹3.3L/mo)',
    ukEuropeSalary: '£29,000 - £38,000 / yr (Ambulance Services)',
    licensingExam: 'BLS, ACLS, PHTLS + National Paramedic Registry',
    careerGrowth: '+150% in trauma ICU units and international flight ambulance teams'
  },
  {
    field: 'Hospital Administration & Operations',
    indiaEntry: '₹4,00,000 - ₹6,00,000 / yr',
    indiaSenior: '₹9,00,000 - ₹16,00,000 / yr',
    gulfSalary: 'AED 12,000 - 22,000 / mo (₹2.7L - ₹4.9L/mo)',
    ukEuropeSalary: '£36,000 - £50,000 / yr',
    licensingExam: 'NABH Assessor / Six Sigma Healthcare / CPHQ',
    careerGrowth: '+200% progression to Assistant Hospital Director & Quality Head'
  }
];

interface SalaryCalculatorProps {
  onApplyClick: () => void;
}

export const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({ onApplyClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const active = pathways[selectedIndex];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div className="section-tag">
            <TrendingUp size={14} />
            <span>Interactive Career & Salary Roadmap</span>
          </div>
          <h2 className="section-title">
            Unlock High-Value Healthcare Opportunities in India & Abroad.
          </h2>
          <p className="section-description" style={{ marginTop: '14px' }}>
            Select a specialized healthcare discipline to explore projected earnings, 
            international licensing pathways, and long-term career progression.
          </p>
        </div>

        {/* Interactive Box */}
        <div 
          style={{
            background: 'var(--color-bg-alt)',
            border: '1.5px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {/* Domain Tabs */}
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '28px' }}>
            {pathways.map((item, idx) => (
              <button
                key={idx}
                className={`filter-btn ${selectedIndex === idx ? 'active' : ''}`}
                onClick={() => setSelectedIndex(idx)}
                style={{ fontSize: '0.875rem', whiteSpace: 'nowrap' }}
              >
                {item.field}
              </button>
            ))}
          </div>

          {/* Salary Breakdown Grid */}
          <div className="grid-3" style={{ gap: '20px' }}>
            {/* India Packages */}
            <motion.div
              key={`india-${selectedIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-primary)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{ fontSize: '1.5rem' }}>🇮🇳</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-secondary)', fontWeight: 700 }}>India Career Path</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Top Multi-Speciality Hospitals</p>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Entry Level (0-1 yr)</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>{active.indiaEntry}</div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Experienced (3-5 yrs)</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-secondary)' }}>{active.indiaSenior}</div>
              </div>
            </motion.div>

            {/* Gulf / Middle East */}
            <motion.div
              key={`gulf-${selectedIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-accent)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{ fontSize: '1.5rem' }}>🇦🇪 🇸🇦</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-secondary)', fontWeight: 700 }}>Gulf / Middle East</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Tax-Free Monthly Earning</p>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Average Tax-Free Salary</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>{active.gulfSalary}</div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Required Licensing</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>{active.licensingExam}</div>
              </div>
            </motion.div>

            {/* UK & Europe */}
            <motion.div
              key={`uk-${selectedIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-primary)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{ fontSize: '1.5rem' }}>🇬🇧 🇩🇪</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-primary)', fontWeight: 700 }}>UK & Europe Pathway</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>NHS & German Health Systems</p>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Annual Healthcare Package</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-primary)' }}>{active.ukEuropeSalary}</div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Growth Projection</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>{active.careerGrowth}</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Roadmap Banner */}
          <div 
            style={{
              marginTop: '24px',
              padding: '16px 20px',
              background: 'var(--color-primary-light)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={20} color="var(--color-primary)" />
              <span style={{ fontSize: '0.9375rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
                ASCENDRA provides complete international credential evaluation and licensing coaching.
              </span>
            </div>
            <button className="btn btn-primary btn-sm" onClick={onApplyClick}>
              <span>Start Your Application</span>
              <ArrowRight size={15} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

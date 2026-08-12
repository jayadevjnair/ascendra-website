import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Send
} from 'lucide-react';
import { COURSES } from '../data/courses';

interface FooterProps {
  onApplyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onApplyClick }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* Col 1: Brand & Kottayam Overview */}
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <img
                src="/ASCENDRA%20LOGO%20PDF-page-1-Photoroom.png"
                alt="ASCENDRA Logo"
                style={{ height: '84px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.65', marginBottom: '20px' }}>
              Premier Healthcare Education & Skill Development Institute based in Kottayam, Kerala.
              Pioneering hospital simulation training, nationally recognized diplomas, and global healthcare career pathways.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.8125rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <MapPin size={16} color="var(--color-accent)" />
                <span>ASCENDRA Towers, K.K. Road, Kottayam, Kerala - 686002</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <Phone size={16} color="var(--color-accent)" />
                <span>+91 9999999999 | 0481 999 9999</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1' }}>
                <Mail size={16} color="var(--color-accent)" />
                <span>testemail.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Featured Programs */}
          <div className="footer-col">
            <h4>Healthcare Programs</h4>
            <ul className="footer-links">
              {COURSES.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <a href="#courses" className="footer-link">
                    {course.title.split('(')[0]}
                  </a>
                </li>
              ))}
              <li>
                <a href="#courses" className="footer-link" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                  View All Specializations →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Accreditations */}
          <div className="footer-col">
            <h4>Institution & Pathways</h4>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About ASCENDRA</a></li>
              <li><a href="#why-ascendra" className="footer-link">Clinical Training Edge</a></li>
              <li><a href="#modes" className="footer-link">Online & Offline Learning</a></li>
              <li><a href="#placements" className="footer-link">Gulf & UK Placement Cell</a></li>
              <li><a href="#gallery" className="footer-link">Simulation Labs Gallery</a></li>
              <li><a href="#faq" className="footer-link">Admission FAQs</a></li>
              <li><a href="#contact" className="footer-link">Contact Admissions</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & International Careers */}
          <div className="footer-col">
            <h4>Healthcare Career Bulletin</h4>
            <p style={{ fontSize: '0.8125rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '16px' }}>
              Subscribe for the latest paramedical job alerts, overseas licensing updates (DHA/NHS), and batch schedules.
            </p>

            {newsletterSubscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent)', fontSize: '0.875rem' }}>
                <CheckCircle2 size={18} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-accent btn-sm"
                  style={{ padding: '0 16px' }}
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={15} />
                </button>
              </form>
            )}

            <div style={{ marginTop: '24px' }}>
              <button
                className="btn btn-outline-white btn-sm"
                onClick={onApplyClick}
                style={{ width: '100%' }}
              >
                <span>Apply for 2026 Batch</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} ASCENDRA Healthcare Education & Skill Development Institute. All rights reserved. Kottayam, Kerala.
            <br />
            <span style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '4px', display: 'inline-block' }}>Developed by corduino</span>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#home" className="footer-link" style={{ fontSize: '0.8125rem' }}>Privacy Policy</a>
            <a href="#home" className="footer-link" style={{ fontSize: '0.8125rem' }}>Terms of Admission</a>
            <a href="#home" className="footer-link" style={{ fontSize: '0.8125rem' }}>Accreditation Verification</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

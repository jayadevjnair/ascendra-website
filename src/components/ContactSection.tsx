import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COURSES } from '../data/courses';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: 'Operation Theatre Technician (OTT)',
    mode: 'Offline Campus (Kottayam)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-alt">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Connect with Admissions</span>
          </div>
          <h2 className="section-title">
            Visit Our Kottayam Campus or Get Free Career Guidance.
          </h2>
          <p className="section-description" style={{ marginTop: '14px' }}>
            Speak directly with our academic counsellors, schedule a simulation lab visit, 
            or request a personalized fee schedule.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Campus Details & Map */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="section-tag section-tag-dark" style={{ marginBottom: '12px' }}>
                <span>Kottayam Headquarters</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                ASCENDRA Institute of Healthcare Education
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                Center of Excellence in Clinical Skill Development & Simulation Studies.
              </p>

              <div className="contact-items">
                {/* Address */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">Campus Location</div>
                    <div className="contact-item-val">
                      ASCENDRA Towers, Near Collectorate, K.K. Road, Kottayam, Kerala - 686002
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">Admission Helpline</div>
                    <a href="tel:+919497088222" className="contact-item-val" style={{ display: 'block' }}>
                      +91 94970 88222 / 0481 258 7890
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">Official Inquiries</div>
                    <a href="mailto:admissions@ascendra.edu.in" className="contact-item-val">
                      admissions@ascendra.edu.in
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="contact-item">
                  <div className="contact-icon-box">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="contact-item-title">Office & Lab Hours</div>
                    <div className="contact-item-val">
                      Mon – Sat: 8:30 AM – 6:00 PM (IST)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Preview Frame */}
            <div style={{ marginTop: '20px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <iframe
                title="ASCENDRA Kottayam Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62956.45238202028!2d76.49526781256743!3d9.59156689849206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba16c6b435f%3A0xbe2b02f68f8dd06e!2sKottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="160"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>

          {/* Right Column: Interactive Enquiry Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-secondary)', marginBottom: '6px', fontWeight: 700 }}>
              Request Course Syllabus & Counselling
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
              Fill in your details below and our academic counsellor will reach out within 2 hours.
            </p>

            {submitted ? (
              <div 
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  background: 'var(--color-primary-light)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-primary)'
                }}
              >
                <CheckCircle2 size={52} color="var(--color-primary)" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ fontSize: '1.25rem', color: 'var(--color-secondary)', fontWeight: 700, marginBottom: '8px' }}>
                  Thank You, {formData.fullName}!
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                  Your request for <strong>{formData.course}</strong> has been received. Our Kottayam admissions team will call you at <strong>{formData.phone}</strong>.
                </p>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                <div className="grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Select Course of Interest</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="form-select"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Preferred Learning Mode</label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="form-select"
                    >
                      <option value="Offline Campus (Kottayam)">Offline Campus (Kottayam)</option>
                      <option value="Hybrid (Online + Clinical)">Hybrid (Online + Clinical)</option>
                      <option value="Hospital Internship Track">Hospital Internship Track</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Any Questions or Comments (Optional)</label>
                  <textarea
                    placeholder="Tell us about your educational background or international placement goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>Submit Consultation Request</span>
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '12px' }}>
                  🔒 Your information is confidential and used solely for academic counselling at ASCENDRA.
                </p>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

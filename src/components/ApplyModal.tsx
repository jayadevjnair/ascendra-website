import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ArrowLeft, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COURSES } from '../data/courses';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, initialCourse }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    qualification: '+2 Science (Biology)',
    course: initialCourse || COURSES[0].title,
    mode: 'Offline Campus (Kottayam)',
    careerGoal: 'Overseas Placement (Gulf / UK / Europe)',
    hostelRequired: 'Yes'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger celebration confetti
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });

    setIsSuccess(true);
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-content"
          style={{ maxWidth: '620px' }}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
        >
          {/* Close Button */}
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div 
                style={{ 
                  width: '72px', 
                  height: '72px', 
                  borderRadius: '50%', 
                  background: 'var(--color-primary-light)', 
                  color: 'var(--color-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 20px' 
                }}
              >
                <CheckCircle2 size={44} />
              </div>

              <span className="badge badge-teal" style={{ marginBottom: '12px' }}>
                Application ID: #ASC-2026-{Math.floor(1000 + Math.random() * 9000)}
              </span>

              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-secondary)', marginBottom: '10px' }}>
                Application Submitted Successfully!
              </h2>

              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: '1.65', marginBottom: '24px' }}>
                Congratulations <strong>{formData.fullName}</strong>. Your provisional admission application for <strong>{formData.course}</strong> has been registered. Our Admissions Dean from Kottayam will contact you at <strong>{formData.phone}</strong> with the entrance schedule and syllabus packet.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                <button className="btn btn-primary" onClick={handleReset}>
                  Done & Return to Site
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <GraduationCap size={20} color="var(--color-primary)" />
                <span className="section-tag" style={{ margin: 0, padding: '4px 12px', fontSize: '0.75rem' }}>
                  2026 Batch Admissions
                </span>
              </div>

              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', marginTop: '8px', marginBottom: '6px' }}>
                Apply to ASCENDRA Healthcare Institute
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
                Step {step} of 2 • Fast-track your application in under 2 minutes.
              </p>

              {/* Step Tracker */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                <div 
                  style={{ 
                    flex: 1, 
                    height: '4px', 
                    borderRadius: '2px', 
                    background: 'var(--color-primary)' 
                  }} 
                />
                <div 
                  style={{ 
                    flex: 1, 
                    height: '4px', 
                    borderRadius: '2px', 
                    background: step === 2 ? 'var(--color-primary)' : 'var(--color-border)' 
                  }} 
                />
              </div>

              {step === 1 ? (
                <form onSubmit={handleNext}>
                  
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandra Joseph"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
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

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        placeholder="sandra@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid-2" style={{ gap: '16px', marginBottom: '24px' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Highest Qualification</label>
                      <select
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="form-select"
                      >
                        <option value="+2 Science (Biology)">+2 Science (Biology)</option>
                        <option value="+2 Science (Maths/CS)">+2 Science (Maths/CS)</option>
                        <option value="+2 Commerce / Humanities">+2 Commerce / Humanities</option>
                        <option value="10th / SSLC">10th / SSLC</option>
                        <option value="Graduate / Degree">Graduate / Degree</option>
                        <option value="Nursing / Paramedical">Nursing / Paramedical</option>
                      </select>
                    </div>

                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Desired Program</label>
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
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit" className="btn btn-primary">
                      <span>Proceed to Step 2</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>

                </form>
              ) : (
                <form onSubmit={handleFinalSubmit}>
                  
                  <div className="form-group">
                    <label className="form-label">Preferred Learning Mode</label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="form-select"
                    >
                      <option value="Offline Campus (Kottayam)">Full-Time Offline Campus (Kottayam)</option>
                      <option value="Hybrid (Online + Clinical)">Hybrid Track (Online + Clinical Postings)</option>
                      <option value="Hospital Internship Track">Hospital Internship Track</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Primary Career Aspiration</label>
                    <select
                      value={formData.careerGoal}
                      onChange={(e) => setFormData({ ...formData, careerGoal: e.target.value })}
                      className="form-select"
                    >
                      <option value="Overseas Placement (Gulf / UK / Europe)">Overseas Healthcare Career (Gulf / UK / Germany)</option>
                      <option value="Top Tier Indian Hospitals">Top Multi-Speciality Hospitals in India</option>
                      <option value="Government / PSU Healthcare">Government & Public Healthcare Units</option>
                      <option value="Higher Medical Studies">Further Specialization & Higher Studies</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label className="form-label">Hostel Accommodation Required in Kottayam?</label>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '6px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.9375rem' }}>
                        <input
                          type="radio"
                          name="hostel"
                          checked={formData.hostelRequired === 'Yes'}
                          onChange={() => setFormData({ ...formData, hostelRequired: 'Yes' })}
                        />
                        Yes, need hostel details
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.9375rem' }}>
                        <input
                          type="radio"
                          name="hostel"
                          checked={formData.hostelRequired === 'No'}
                          onChange={() => setFormData({ ...formData, hostelRequired: 'No' })}
                        />
                        No, day scholar / local
                      </label>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => setStep(1)}>
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>

                    <button type="submit" className="btn btn-accent">
                      <span>Submit Official Application</span>
                      <CheckCircle2 size={18} />
                    </button>
                  </div>

                </form>
              )}

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Award, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Course } from '../data/courses';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onApply: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onApply }) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div
          className="modal-content"
          style={{ maxWidth: '680px' }}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
            <span className="badge badge-teal">{course.category}</span>
            <span className="badge badge-navy">{course.mode}</span>
          </div>

          <h2 style={{ fontSize: '1.65rem', color: 'var(--color-secondary)', marginBottom: '8px' }}>
            {course.title}
          </h2>
          <p style={{ color: 'var(--color-primary-dark)', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '20px' }}>
            {course.tagline}
          </p>

          {/* Quick Meta Row */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              padding: '16px',
              background: 'var(--color-bg-alt)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              marginBottom: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
              <Clock size={16} color="var(--color-primary)" />
              <span><strong>Duration:</strong> {course.duration}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
              <Award size={16} color="var(--color-primary)" />
              <span><strong>Seats:</strong> {course.seats} per batch</span>
            </div>
            <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
              <ShieldCheck size={16} color="var(--color-primary)" />
              <span><strong>Certification:</strong> {course.certificate}</span>
            </div>
          </div>

          {/* Course Overview */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '8px' }}>
              Program Overview
            </h4>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>
              {course.overview}
            </p>
          </div>

          {/* Curriculum Modules */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '12px' }}>
              Key Curriculum Modules
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {course.modules.map((module, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Salary */}
          <div style={{ marginBottom: '28px', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px dashed var(--color-border)' }}>
            <div style={{ fontSize: '0.875rem', marginBottom: '8px' }}>
              <strong style={{ color: 'var(--color-secondary)' }}>Eligibility:</strong> {course.eligibility}
            </div>
            <div style={{ fontSize: '0.875rem' }}>
              <strong style={{ color: 'var(--color-secondary)' }}>Career Salary Expectation:</strong> {course.salaryRange}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button className="btn btn-secondary btn-sm" onClick={onClose}>
              <span>Close</span>
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onApply(course.title);
              }}
            >
              <span>Apply for this Course</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

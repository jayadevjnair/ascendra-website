import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Search, 
  Laptop 
} from 'lucide-react';
import { COURSES, type Course } from '../data/courses';
import { CourseModal } from './CourseModal';

interface CoursesSectionProps {
  onApplyClick: (courseTitle?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onApplyClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const categories = ['All', 'Diploma', 'Certification', 'Management'];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCat = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.certificate.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="courses" className="section-padding bg-alt">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Featured Healthcare Programs</span>
          </div>
          <h2 className="section-title">
            Industry-Oriented Healthcare Programs Built for High-Growth Careers.
          </h2>
          <p className="section-description" style={{ marginTop: '14px' }}>
            Comprehensive diploma and certification tracks offering real clinical rotations, 
            internationally accredited syllabi, and guaranteed placement drives.
          </p>
        </div>

        {/* Filters & Search Row */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '16px',
            margin: '40px 0 32px'
          }}
        >
          {/* Category Filter Pills */}
          <div className="course-filters" style={{ margin: 0 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'All' ? 'All Programs' : cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search 
              size={18} 
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} 
            />
            <input
              type="text"
              placeholder="Search course (e.g. Dialysis, OT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '40px', borderRadius: 'var(--radius-pill)', fontSize: '0.875rem' }}
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid-3">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              className="course-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Image & Category Overlay */}
              <div className="course-img-wrap">
                <img src={course.image} alt={course.title} loading="lazy" />
                <div className="course-badge-overlay">
                  <span className="badge badge-teal">{course.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="course-content">
                <div className="course-meta-row">
                  <div className="course-meta-item">
                    <Clock size={14} color="var(--color-primary)" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="course-meta-item">
                    <Laptop size={14} color="var(--color-secondary)" />
                    <span>{course.mode.split(' ')[0]}</span>
                  </div>
                </div>

                <h3 className="course-title">{course.title}</h3>
                
                <p className="course-desc">
                  {course.tagline}
                </p>

                <div className="course-cert-box">
                  <Award size={16} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {course.certificate}
                  </span>
                </div>

                {/* Footer CTAs */}
                <div className="course-footer">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setActiveCourseModal(course)}
                  >
                    <span>Learn More</span>
                  </button>

                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => onApplyClick(course.title)}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#FFFFFF', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem' }}>
              No healthcare courses found matching "{searchQuery}".
            </p>
            <button 
              className="btn btn-secondary btn-sm" 
              style={{ marginTop: '16px' }}
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Modal Popup */}
      <CourseModal
        course={activeCourseModal}
        onClose={() => setActiveCourseModal(null)}
        onApply={(courseTitle) => onApplyClick(courseTitle)}
      />
    </section>
  );
};

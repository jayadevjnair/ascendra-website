import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  GraduationCap, 
  Laptop, 
  Users
} from 'lucide-react';

interface HeroProps {
  onApplyClick: () => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onExploreCourses }) => {
  return (
    <section id="home" className="hero-section">
      {/* Background Ambient Glow & Geometric Shapes */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          
          {/* Left Column: Hero Content */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Tag */}
            <div className="section-tag">
              <Sparkles size={14} style={{ color: 'var(--color-primary)' }} />
              <span>ASCENDRA • Rise Beyond Borders</span>
            </div>

            {/* Large Heading (72px desktop) */}
            <h1 className="hero-title" style={{ marginBottom: '20px' }}>
              Build Your Future in Healthcare.{' '}
              <span className="text-gradient-primary">Become Industry Ready.</span>
            </h1>

            {/* Description */}
            <p className="hero-subtitle">
              ASCENDRA is a premier healthcare education and skill development institute offering 
              industry-oriented certification and diploma programs with practical hospital training, 
              online and offline learning, career guidance, and placement support.
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <button 
                className="btn btn-primary btn-lg" 
                onClick={onApplyClick}
                id="hero-apply-now-btn"
              >
                <span>Apply Now</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn btn-secondary btn-lg" 
                onClick={onExploreCourses}
                id="hero-explore-courses-btn"
              >
                <GraduationCap size={18} />
                <span>Explore Courses</span>
              </button>
            </div>

            {/* Below Buttons Checklist */}
            <div className="hero-checklist">
              <div className="hero-check-item">
                <div className="check-icon">
                  <CheckCircle2 size={15} />
                </div>
                <span>Online Classes</span>
              </div>

              <div className="hero-check-item">
                <div className="check-icon">
                  <CheckCircle2 size={15} />
                </div>
                <span>Offline Classes</span>
              </div>

              <div className="hero-check-item">
                <div className="check-icon">
                  <CheckCircle2 size={15} />
                </div>
                <span>Hospital Training</span>
              </div>

              <div className="hero-check-item">
                <div className="check-icon">
                  <CheckCircle2 size={15} />
                </div>
                <span>Placement Assistance</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Stack & Floating Glass Cards */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-image-wrapper">
              <img 
                src="/hero1.png" 
                alt="Healthcare Students and Medical Instructors in Modern Clinical Environment"
                className="hero-main-img"
              />
              
              {/* Subtle visual gradient overlay for contrast */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 65%, rgba(19, 7, 46, 0.45) 100%)',
                  pointerEvents: 'none'
                }}
              />
            </div>

            {/* Floating Glass Card 1: 95% Placement Support */}
            <motion.div 
              className="floating-card floating-card-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="card-icon-circle" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                <Award size={22} />
              </div>
              <div>
                <div className="card-stat-num">95% Placement Support</div>
                <div className="card-stat-label">India, GCC & Europe Hospitals</div>
              </div>
            </motion.div>

            {/* Floating Glass Card 2: Offline & Online Learning */}
            <motion.div 
              className="floating-card floating-card-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="card-icon-circle" style={{ background: 'rgba(124, 58, 237, 0.12)', color: 'var(--color-primary)' }}>
                <Laptop size={22} />
              </div>
              <div>
                <div className="card-stat-num">Offline & Online Learning</div>
                <div className="card-stat-label">Kottayam Campus + Live Smart LMS</div>
              </div>
            </motion.div>

            {/* Floating Glass Card 3: Industry Expert Faculty */}
            <motion.div 
              className="floating-card floating-card-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <div className="card-icon-circle" style={{ background: 'rgba(192, 132, 252, 0.18)', color: 'var(--color-primary-dark)' }}>
                <Users size={22} />
              </div>
              <div>
                <div className="card-stat-num">Industry Expert Faculty</div>
                <div className="card-stat-label">Senior Clinicians & Certified Trainers</div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

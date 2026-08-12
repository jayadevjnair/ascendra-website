import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { About } from './components/About';
import { WhyAscendra } from './components/WhyAscendra';
import { CoursesSection } from './components/CoursesSection';
import { SalaryCalculator } from './components/SalaryCalculator';
import { LearningModes } from './components/LearningModes';
import { PlacementsSection } from './components/PlacementsSection';
import { Testimonials } from './components/Testimonials';

import { AdmissionProcess } from './components/AdmissionProcess';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ChevronUp } from 'lucide-react';

export function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCourseForApply, setSelectedCourseForApply] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleOpenApply = (courseTitle?: string) => {
    setSelectedCourseForApply(courseTitle);
    setIsApplyModalOpen(true);
  };

  const handleExploreCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* Dynamic Navigation Header */}
      <Navbar onApplyClick={() => handleOpenApply()} />

      <main>
        {/* 1. Hero Section */}
        <Hero 
          onApplyClick={() => handleOpenApply()} 
          onExploreCourses={handleExploreCourses} 
        />

        {/* 2. Trust Stats Counter Strip */}
        <TrustStats />

        {/* 3. About Section (Who We Are) */}
        <About onApplyClick={() => handleOpenApply()} />

        {/* 4. Why ASCENDRA 6-Card Grid */}
        <WhyAscendra onApplyClick={() => handleOpenApply()} />

        {/* 5. Courses & Clinical Specializations */}
        <CoursesSection onApplyClick={(course) => handleOpenApply(course)} />

        {/* 6. Interactive Career Salary & Pathway Explorer */}
        <SalaryCalculator onApplyClick={() => handleOpenApply()} />

        {/* 7. Learning Modes (Offline vs Online) */}
        <LearningModes onApplyClick={() => handleOpenApply()} />

        {/* 8. Placement Section (Dark Navy Immersion) */}
        <PlacementsSection onApplyClick={() => handleOpenApply()} />

        {/* 9. Student Testimonials Carousel */}
        <Testimonials />



        {/* 12. Admission Process Roadmap */}
        <AdmissionProcess onApplyClick={() => handleOpenApply()} />

        {/* 13. FAQ Accordion */}
        <FaqSection />

        {/* 14. Contact Section & Kottayam Map */}
        <ContactSection />
      </main>

      {/* 15. Rich Dark Navy Footer */}
      <Footer onApplyClick={() => handleOpenApply()} />

      {/* Global Modals & Float Widgets */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialCourse={selectedCourseForApply}
      />

      <WhatsAppButton />

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '28px',
            left: '28px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            color: 'var(--color-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-md)',
            cursor: 'pointer',
            zIndex: 900,
            transition: 'all 0.2s ease'
          }}
          aria-label="Back to top"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </div>
  );
}

export default App;

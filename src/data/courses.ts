export interface Course {
  id: string;
  title: string;
  category: 'Diploma' | 'Certification' | 'Advanced' | 'Management';
  duration: string;
  mode: 'Hybrid (Online + Hospital)' | 'Classroom & Clinical' | 'Hospital Internship Track';
  certificate: string;
  image: string;
  tagline: string;
  overview: string;
  eligibility: string;
  modules: string[];
  careerRoles: string[];
  salaryRange: string;
  seats: number;
}

export const COURSES: Course[] = [
  {
    id: 'gda',
    title: 'General Duty Assistant (GDA)',
    category: 'Certification',
    duration: '6 Months - 1 Year',
    mode: 'Classroom & Clinical',
    certificate: 'National Skill Development Certification',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    tagline: 'Deliver compassionate, high-standard patient support in premier hospitals and home-care settings.',
    overview: 'Focuses on fundamental nursing assistance, vital signs monitoring, geriatric patient care, and post-operative rehabilitation.',
    eligibility: '10th Standard / SSLC / +2 from any stream',
    modules: [
      'Foundations of Patient Care',
      'Vital Signs & Clinical Monitoring',
      'Geriatric Care',
      'Infection Prevention'
    ],
    careerRoles: ['General Duty Assistant', 'Patient Care Associate', 'Home Healthcare Lead'],
    salaryRange: '₹2.0L - ₹3.5L/yr (India)',
    seats: 30
  },
  {
    id: 'anm',
    title: 'Auxiliary Nurse Midwifery (ANM)',
    category: 'Diploma',
    duration: '2 Years',
    mode: 'Classroom & Clinical',
    certificate: 'Nursing Council Approved Diploma',
    image: '/auxilary1.png',
    tagline: 'Serve the community as a foundational pillar of the healthcare and maternal care system.',
    overview: 'Comprehensive nursing program focusing on maternal and child health, family planning, immunization, and community health services.',
    eligibility: 'Plus Two (+2) from any stream (Science/Arts/Commerce)',
    modules: [
      'Community Health Nursing',
      'Health Promotion',
      'Primary Healthcare Nursing',
      'Child Health Nursing',
      'Midwifery'
    ],
    careerRoles: ['Community Health Nurse', 'Maternal Care Assistant', 'Primary Healthcare Worker'],
    salaryRange: '₹2.5L - ₹4.5L/yr (India)',
    seats: 40
  },
  {
    id: 'mha',
    title: 'Hospital Administration',
    category: 'Management',
    duration: '1 Year Executive Diploma / 2 Year Graduate Diploma',
    mode: 'Hybrid (Online + Hospital)',
    certificate: 'Healthcare Operations & Hospital Management Diploma',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    tagline: 'Lead modern multi-specialty hospitals, clinical workflows, and healthcare technology.',
    overview: 'Focuses on hospital operations, NABH accreditation standards, healthcare IT/HIS, medical billing, and patient relations.',
    eligibility: 'Any Degree / Graduation',
    modules: [
      'Hospital Planning & Accreditation',
      'Healthcare Information Systems',
      'Medical Billing & TPA',
      'Clinical Quality Management'
    ],
    careerRoles: ['Hospital Operations Manager', 'Quality Coordinator', 'Patient Relations Lead'],
    salaryRange: '₹4.5L - ₹9.0L/yr (India)',
    seats: 30
  },
  {
    id: 'allied',
    title: 'Allied Healthcare Course',
    category: 'Advanced',
    duration: '1 - 2 Years',
    mode: 'Classroom & Clinical',
    certificate: 'Allied Healthcare Sciences Diploma',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    tagline: 'A multi-disciplinary course equipping you with skills across various diagnostic and therapeutic specialties.',
    overview: 'A foundational and advanced course covering essential aspects of modern healthcare diagnostics, therapy assistance, and clinical support.',
    eligibility: 'Plus Two (+2) with Science',
    modules: [
      'Basic Clinical Pathology',
      'Emergency Response & First Aid',
      'Healthcare Technology & Instrumentation',
      'Patient Care Ethics'
    ],
    careerRoles: ['Allied Healthcare Tech', 'Clinical Support Specialist', 'Healthcare Assistant'],
    salaryRange: '₹3.0L - ₹6.0L/yr (India)',
    seats: 25
  }
];

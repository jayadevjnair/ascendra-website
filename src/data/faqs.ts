export interface FAQ {
  id: string;
  category: 'Admissions' | 'Clinical Training' | 'Placements' | 'Modes & Campus';
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    category: 'Admissions',
    question: 'What are the basic eligibility criteria for diploma and certification programs?',
    answer: 'Eligibility varies by program. Programs like Patient Care Assistant and Emergency Medical Technician accept 10th Standard / SSLC or +2 from any stream. Technical diplomas such as Operation Theatre Technician, Dialysis Technician, and Medical Lab Assistant require +2 with Science (Biology preferred). Hospital Administration programs welcome any university graduate.'
  },
  {
    id: 'f2',
    category: 'Clinical Training',
    question: 'How is the practical hospital training conducted?',
    answer: 'At ASCENDRA, theoretical learning is paired directly with hands-on hospital exposure. Students complete foundational training in our Kottayam simulation labs followed by structured 6-month clinical internships at NABH & JCI accredited multi-specialty partner hospitals across Kerala.'
  },
  {
    id: 'f3',
    category: 'Placements',
    question: 'Does ASCENDRA provide placement assistance for jobs abroad (Gulf, UK, Germany)?',
    answer: 'Yes! Our dedicated International Placement Cell provides 100% placement guidance. We offer specialized training for DHA/HAAD/MOH licensing exams (UAE/Middle East), OET/IELTS English preparation, and direct institutional tie-ups with recruitment agencies for healthcare opportunities in the UK, Germany, and GCC countries.'
  },
  {
    id: 'f4',
    category: 'Modes & Campus',
    question: 'Can working professionals or students outside Kottayam enroll in online classes?',
    answer: 'Absolutely. We offer hybrid learning tracks where theory classes, interactive webinars, and assignments are accessible 24/7 through our smart online learning platform, allowing you to complete scheduled intensive practical lab sessions and clinical postings on flexible dates.'
  },
  {
    id: 'f5',
    category: 'Modes & Campus',
    question: 'Where is the ASCENDRA campus located and are hostel facilities available?',
    answer: 'Our main campus and simulation center are centrally located in Kottayam, Kerala with convenient access to KSRTC and railway hubs. We provide verified, safe, and hygienic hostel accommodations with meal plans for outstation male and female students.'
  },
  {
    id: 'f6',
    category: 'Admissions',
    question: 'Are installment options or education loan support available for course fees?',
    answer: 'Yes. ASCENDRA believes financial constraints should never stop an aspiring healthcare professional. We offer flexible zero-interest monthly installment plans and dedicated documentation support for nationalized bank education loans and merit scholarships.'
  }
];

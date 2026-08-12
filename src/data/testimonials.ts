export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  workplace: string;
  country: string;
  photo: string;
  rating: number;
  quote: string;
  year: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Thomas',
    role: 'Senior OT Technologist',
    course: 'Operation Theatre Technician Diploma',
    workplace: 'Aster Medcity, Kochi',
    country: 'India',
    photo: 'https://images.unsplash.com/photo-1594824813572-c518884974f1?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'The 6-month intensive clinical rotation organized by ASCENDRA gave me direct confidence inside robotic surgery suites. Before finishing my diploma, I had two job offers in hand.',
    year: 'Batch 2024'
  },
  {
    id: '2',
    name: 'Rahul K. Menon',
    role: 'Lead Dialysis Specialist',
    course: 'Dialysis Technician Diploma',
    workplace: 'NMC Royal Hospital, Abu Dhabi',
    country: 'UAE',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'ASCENDRA is not just a coaching center; their modern nephrology simulation labs and German-standard protocols prepared me for the DHA / HAAD examinations on my very first attempt.',
    year: 'Batch 2023'
  },
  {
    id: '3',
    name: 'Sneha Mariam Varghese',
    role: 'Clinical Care Associate',
    course: 'Patient Care Assistant (PCA)',
    workplace: 'NHS Trust Hospital, Manchester',
    country: 'United Kingdom',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'From Kottayam to the UK NHS! The faculty at ASCENDRA supported me with international documentation, OET English training, and patient ethics that set me apart during interviews.',
    year: 'Batch 2024'
  },
  {
    id: '4',
    name: 'Jithin Mathew',
    role: 'Emergency Medical Technician',
    course: 'Emergency Medical Technician (EMT)',
    workplace: 'Caritas Hospital, Kottayam',
    country: 'India',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'The trauma response simulations and ambulance telemetry training were so practical that my transition to an active emergency department felt seamless and instinctive.',
    year: 'Batch 2024'
  },
  {
    id: '5',
    name: 'Gopika Krishnan',
    role: 'Assistant Operations Manager',
    course: 'Hospital Administration (MHA)',
    workplace: 'Believers Church Medical College Hospital',
    country: 'India',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'The NABH compliance modules and healthcare IT training provided an extraordinary foundation. ASCENDRA’s placement cell arranged executive interviews within days of graduation.',
    year: 'Batch 2023'
  }
];

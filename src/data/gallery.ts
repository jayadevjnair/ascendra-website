export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hospital Training' | 'Laboratories' | 'Events' | 'Classrooms' | 'Graduation';
  image: string;
  description: string;
  span?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Advanced OT Simulation Suite',
    category: 'Laboratories',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    description: 'Students mastering surgical sterile protocols and anaesthesia monitors in smart simulation labs in Kottayam.',
    span: true
  },
  {
    id: 'g2',
    title: 'Live Clinical Rotations at Partner Hospital',
    category: 'Hospital Training',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'Hands-on patient interaction and vitals monitoring under direct supervision of senior doctors.'
  },
  {
    id: 'g3',
    title: 'Biochemistry & Hematology Lab',
    category: 'Laboratories',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    description: 'High-precision automated analyzer diagnostics training for medical laboratory assistants.'
  },
  {
    id: 'g4',
    title: 'Annual Healthcare Convocation Day',
    category: 'Graduation',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    description: 'Celebrating 300+ certified healthcare graduates taking the professional medical pledge.',
    span: true
  },
  {
    id: 'g5',
    title: 'Smart Digital Health Classroom',
    category: 'Classrooms',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: 'Interactive audiovisual lectures with case study discussions and tele-health simulations.'
  },
  {
    id: 'g6',
    title: 'International Career Conclave & Campus Hiring',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'Recruitment directors from leading Gulf and Indian hospital groups interviewing candidates.'
  }
];

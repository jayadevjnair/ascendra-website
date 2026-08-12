export interface Partner {
  name: string;
  location: string;
  type: string;
  badge: string;
}

export const HOSPITAL_PARTNERS: Partner[] = [
  { name: 'Aster Medcity', location: 'Kochi', type: 'JCI Accredited Quaternary Care', badge: 'Placement & Clinical Training' },
  { name: 'Apollo Hospitals', location: 'National Network', type: 'Multi-Speciality Healthcare', badge: 'Campus Hiring Partner' },
  { name: 'Caritas Hospital', location: 'Kottayam', type: 'NABH Accredited Medical Center', badge: 'Hands-on Rotations' },
  { name: 'VPS Lakeshore Hospital', location: 'Kochi', type: 'Super Speciality Institute', badge: 'OT & Dialysis Internship' },
  { name: 'Believers Church Med. College', location: 'Thiruvalla', type: 'Academic Medical Hospital', badge: 'Clinical Rotations' },
  { name: 'KIMSHEALTH', location: 'Trivandrum', type: 'Pioneer Healthcare Chain', badge: 'Direct Recruitment' },
  { name: 'Rajagiri Hospital', location: 'Aluva', type: 'JCI & NABH Accredited', badge: 'Emergency & Lab Training' },
  { name: 'Mar Sleeva Medicity', location: 'Pala, Kottayam', type: 'Advanced Tertiary Care', badge: 'Regional Hospital Partner' },
  { name: 'NMC Healthcare', location: 'UAE / GCC', type: 'International Healthcare Group', badge: 'Gulf Placement Pathway' },
  { name: 'NHS Trust Partners', location: 'United Kingdom', type: 'UK Healthcare System', badge: 'Overseas Fast-Track' }
];

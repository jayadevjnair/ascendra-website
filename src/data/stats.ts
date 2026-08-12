export interface TrustStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  iconName: string;
}

export const TRUST_STATS: TrustStat[] = [
  {
    id: 'students',
    value: 1000,
    suffix: '+',
    label: 'Students Trained',
    description: 'Empowered with job-ready clinical and healthcare skills',
    iconName: 'GraduationCap'
  },
  {
    id: 'programs',
    value: 5,
    suffix: '+',
    label: 'Healthcare Programs',
    description: 'Industry-aligned diplomas & specialized certifications',
    iconName: 'Award'
  },
  {
    id: 'placements',
    value: 99,
    suffix: '%',
    label: 'Placement Support',
    description: 'Direct recruitment across India, GCC & European hospitals',
    iconName: 'Briefcase'
  }
];

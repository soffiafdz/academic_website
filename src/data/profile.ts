export const profile = {
  firstName: 'Sofía',
  lastName: 'Fernández Lozano',
  tagline: 'PhD in Neurosciences',
  updated: 'June 2026',
  info: {
    email: 'sofia.fdzl@pm.me',
    phone: '+1 (438) 506-2094',
    orcid: '0000-0003-2288-8111',
    github: 'soffiafdz',
    linkedin: 'so1.618e',
    location: 'Montréal, QC, Canada',
  },
} as const;

export type Profile = typeof profile;

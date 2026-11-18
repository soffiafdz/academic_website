export const profile = {
  firstName: 'Sofía',
  lastName: 'Fernández Lozano',
  position: 'Postdoctoral Fellow',
  affiliation: 'StoP-AD, Douglas Research Centre',
  affiliationFull:
    "Centre for Studies on the Prevention of Alzheimer's Disease (StoP-AD), Douglas Research Centre",
  city: 'Montréal',
  themes: [
    'MRI biomarkers of neurodegeneration',
    "Preclinical Alzheimer's disease",
    'Cardiovascular risk',
    'Structural equation modeling',
  ],
  description:
    "Sofía Fernández Lozano is a postdoctoral fellow at StoP-AD, Douglas Research Centre, in Montréal, working on MRI biomarkers of neurodegeneration and cardiovascular risk in preclinical Alzheimer's disease.",
  updated: 'October 2026',
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

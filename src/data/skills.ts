export type SkillItem = {
  name: string;
  detail?: string;
  primary?: boolean;
};

export type SkillCategory = {
  category: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Spanish', detail: 'native', primary: true },
      { name: 'English', detail: 'fluent', primary: true },
      { name: 'French', detail: 'intermediate' },
    ],
  },
  {
    category: 'Programming',
    items: [
      { name: 'R', primary: true },
      { name: 'Python', primary: true },
      { name: 'SQL' },
      { name: 'JavaScript' },
      { name: 'Shell' },
      { name: 'Perl' },
    ],
  },
  {
    category: 'Methods',
    items: [
      { name: 'SEM', detail: 'CFA, mediation, LGCM', primary: true },
      { name: 'Neuroimaging processing', primary: true },
      { name: 'Machine learning' },
      { name: 'Deep learning' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'UNIX' },
      { name: 'HPC clusters' },
      { name: 'Git & GitHub', primary: true },
      { name: 'Docker', primary: true },
      { name: 'Singularity' },
      { name: 'Podman' },
      { name: 'Flask' },
    ],
  },
  {
    category: 'Markup',
    items: [
      { name: 'LaTeX' },
      { name: 'Typst' },
      { name: 'Markdown' },
      { name: 'HTML' },
    ],
  },
];

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/publications' }),
  schema: z.object({
    type: z.enum(['article', 'chapter', 'preprint', 'conference', 'poster', 'talk']),
    title: z.string(),
    englishTitle: z.string().optional(),
    authors: z.string().optional(),
    talkType: z.string().optional(),
    venue: z.string(),
    venueDetail: z.string().optional(),
    location: z.string().optional(),
    date: z.string(),
    year: z.number().int(),
    doi: z.string().optional(),
    url: z.url().optional(),
    notes: z.string().optional(),
  }),
});

const honours = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/honours' }),
  schema: z.object({
    title: z.string(),
    amount: z.string().optional(),
    location: z.string(),
    year: z.string(),
    tier: z.enum(['fellowship', 'recognition']),
    // Explicit CV-of-record ordering — not derivable from dates alone.
    order: z.number().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/experience' }),
  schema: z.object({
    org: z.string(),
    role: z.string(),
    location: z.string(),
    dateStart: z.string(),
    dateEnd: z.string().optional(),
    category: z.enum(['research', 'clinical', 'volunteering']),
    bullets: z.array(z.string()),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/education' }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    honours: z.string().optional(),
    location: z.string(),
    year: z.string(),
    bullets: z.array(z.string()),
  }),
});

const software = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/software' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string().optional(),
    role: z.string().optional(),
    period: z.string().optional(),
    links: z
      .object({
        github: z.url().optional(),
        docker: z.url().optional(),
        paper: z.url().optional(),
      })
      .optional(),
    bullets: z.array(z.string()),
    tier: z.enum(['major', 'group']),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/teaching' }),
  schema: z.object({
    title: z.string(),
    org: z.string().optional(),
    location: z.string().optional(),
    period: z.string().optional(),
    bullets: z.array(z.string()),
  }),
});

export const collections = { publications, honours, experience, education, software, teaching };

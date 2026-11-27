import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const panduan = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/panduan' }),
  schema: z.object({
    title: z.string().min(10),
    seoTitle: z.string().min(10),
    description: z.string().min(50).max(200),
    summary: z.string().min(10),
    order: z.number().int().positive(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    cta: z.object({ title: z.string(), text: z.string() }),
    related: z.array(reference('panduan')).default([]),
  }),
});

export const collections = { panduan };

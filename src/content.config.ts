import { defineCollection, z } from "astro:content";

const postersCollection = defineCollection({
  type: "content",
  schema: z.object({
    year: z.union([z.number(), z.string()]),
    division: z.string(),
    category: z.string(),
    title: z.string(),
    authors: z.array(z.string()),
    prize: z.string().nullable().optional(),
    posterImage: z.string(),
    videoUrl: z.string().nullable().optional(),
    sortOrder: z.number().optional(),
  }),
});

const conferencesCollection = defineCollection({
  type: "content",
  schema: z.object({
    year: z.number(),
    theme: z.string().nullable(),
    description: z.string().nullable(),
    posterImage: z.string().nullable(),
    keynotes: z.array(z.object({
      name: z.string(),
      institution: z.string(),
      role: z.string(),
      talkTitle: z.string().nullable(),
      image: z.string().nullable(),
    })),
  }),
});

export const collections = {
  posters: postersCollection,
  conferences: conferencesCollection,
};
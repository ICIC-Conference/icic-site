import { defineCollection, z } from "astro:content";

const postersCollection = defineCollection({
  type: "content",
  schema: z.object({
    year: z.number(),
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

export const collections = {
  posters: postersCollection,
};
import { defineCollection, z } from "astro:content"

const posts = defineCollection({
 type: "content",
 schema: z.object({
  title: z.string(),
  createdAt: z.coerce.date()
 })
})

export const collections = { posts }
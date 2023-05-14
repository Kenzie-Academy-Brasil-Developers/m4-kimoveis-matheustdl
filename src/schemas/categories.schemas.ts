import { z } from 'zod';

const categoryRequestSchema = z.object({
    name: z.string(),
});

const categoryResponseSchema = categoryRequestSchema.extend({
    id: z.number(),
});

const listCategorySchema = z.array(categoryResponseSchema);

export { categoryRequestSchema, categoryResponseSchema, listCategorySchema };

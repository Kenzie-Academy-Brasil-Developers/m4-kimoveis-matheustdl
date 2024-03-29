import { z } from 'zod';
import { categoryResponseSchema } from './categories.schemas';

const addressRequestSchema = z.object({
    street: z.string(),
    zipCode: z.string().max(8),
    number: z.string().max(7).nullish(),
    city: z.string().max(20),
    state: z.string().max(2),
});

const addressReturnSchema = addressRequestSchema.extend({
    id: z.number(),
});

const estateRequestSchema = z.object({
    sold: z.boolean().default(false),
    value: z.string().or(z.number().positive()),
    size: z.number().positive().int(),
    address: addressRequestSchema,
    categoryId: z.number(),
});

const estateResponseSchema = estateRequestSchema
    .extend({
        id: z.number(),
        createdAt: z.string(),
        updatedAt: z.string().nullish(),
        address: addressReturnSchema.pick({
            street: true,
            zipCode: true,
            number: true,
            city: true,
            state: true,
            id: true,
        }),
        category: categoryResponseSchema,
    })
    .omit({
        categoryId: true,
    });

const listEstateSchema = z.array(estateResponseSchema);

export {
    estateRequestSchema,
    estateResponseSchema,
    addressRequestSchema,
    addressReturnSchema,
    listEstateSchema,
};

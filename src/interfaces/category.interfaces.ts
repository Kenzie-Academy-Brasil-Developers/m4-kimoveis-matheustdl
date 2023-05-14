import { z } from 'zod';
import {
    categoryRequestSchema,
    categoryResponseSchema,
    listCategorySchema,
} from '../schemas/categories.schemas';

type TCategoryRequest = z.infer<typeof categoryRequestSchema>;
type TCategoryResponse = z.infer<typeof categoryResponseSchema>;
type TListCategory = z.infer<typeof listCategorySchema>;

export { TCategoryRequest, TCategoryResponse, TListCategory };

import { z } from 'zod';
import {
    listEstateSchema,
    estateRequestSchema,
    estateResponseSchema,
} from '../schemas/realEstate.schemas';

type TEstateRequest = z.infer<typeof estateRequestSchema>;
type TEstateResponse = z.infer<typeof estateResponseSchema>;

type TListEstate = z.infer<typeof listEstateSchema>;

export { TEstateRequest, TEstateResponse, TListEstate };

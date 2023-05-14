import { z } from 'zod';
import { estateResponseSchema } from './realEstate.schemas';
import { userResponseSchema } from './users.schemas';

const scheduleRequestSchema = z.object({
    date: z.string().regex(/^\d{4}\/\d{2}\/\d{2}$/),
    hour: z.string().regex(/^\d{2}:\d{2}$/),
    realEstateId: z.number(),
});

const scheduleResponseSchema = scheduleRequestSchema
    .extend({
        id: z.number(),
        user: userResponseSchema,
        realEstate: estateResponseSchema,
    })
    .omit({
        realEstateId: true,
    });

const allScheduleEstate = z.object({
    id: z.number(),
    userId: userResponseSchema,
});

export { scheduleRequestSchema, scheduleResponseSchema, allScheduleEstate };

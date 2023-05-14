import { z } from 'zod';
import {
    allScheduleEstate,
    scheduleRequestSchema,
    scheduleResponseSchema,
} from '../schemas/schedule.schema';

type TScheduleRequest = z.infer<typeof scheduleRequestSchema>;
type TScheduleResponse = z.infer<typeof scheduleResponseSchema>;
type TAllSchedule = z.infer<typeof allScheduleEstate>;

export { TScheduleRequest, TScheduleResponse, TAllSchedule };

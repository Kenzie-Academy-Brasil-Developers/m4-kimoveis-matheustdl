import { Router } from 'express';
import {
    createSchedulesController,
    listAllSchedulesController,
} from '../controllers/schedule.controller';
import ensureTokenValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import { scheduleRequestSchema } from '../schemas/schedule.schema';
import ensureDataValidMiddleware from '../middlewares/ensureDataValid.middleware';
import ensureRealEstateForScheduleExists from '../middlewares/ensureRealEstateForPostSchedule.middleware';
import ensureUserIsAdminSchedulesMiddleware from '../middlewares/ensureUserIsAdminSchedules.middleware';
import ensureExistsRealEstate from '../middlewares/ensureRealEstateExists.middleware';
import ensureRealEstateUnique from '../middlewares/ensureUniqueRealEstate.middleware';

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
    '',
    ensureTokenValidMiddleware,
    ensureDataValidMiddleware(scheduleRequestSchema),
    ensureRealEstateForScheduleExists,
    ensureRealEstateUnique,
    createSchedulesController
);

schedulesRoutes.get(
    '/realEstate/:id',
    ensureTokenValidMiddleware,
    ensureUserIsAdminSchedulesMiddleware,
    ensureExistsRealEstate,
    listAllSchedulesController
);

export default schedulesRoutes;

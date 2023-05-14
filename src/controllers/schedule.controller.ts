import { Request, Response } from 'express';
import createScheduleService from '../services/schedule/CreateSchedules.service';
import listAllSchedulesService from '../services/schedule/listAllSchedules.service';
import { RealEstate, Schedule } from '../entities';
import { TScheduleRequest } from '../interfaces/schedule.interfaces';

const createSchedulesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = parseInt(res.locals.id);
    const scheduleData: TScheduleRequest = req.body;
    await createScheduleService(userId, scheduleData);

    return res.status(201).json({ message: 'Schedule created' });
};

const listAllSchedulesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id: number = parseInt(req.params.id);
    const schedules: RealEstate | null = await listAllSchedulesService(id);

    return res.json(schedules);
};

export { createSchedulesController, listAllSchedulesController };

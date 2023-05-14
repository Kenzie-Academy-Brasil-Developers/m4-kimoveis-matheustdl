import { NextFunction, Request, Response } from 'express';

const ensureCheckTimeSchedule = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { date, hour } = req.body;

    const visitDate = new Date(`${date}T${hour}:00`);
    if (visitDate.toString() === 'Invalid Date') {
        return res.status(400).json({
            message:
                'User schedule to this real estate at this date and time already exists',
        });
    }

    const weekday = visitDate.getDay();
    if (weekday === 0 || weekday === 6) {
        return res
            .status(400)
            .json({ message: 'Visits can only be scheduled on weekdays' });
    }

    const hourOfDay = visitDate.getHours();
    if (hourOfDay < 8 || hourOfDay >= 18) {
        return res.status(400).json({
            message: 'Visits can only be scheduled during business hours',
        });
    }

    return next();
};

export default ensureCheckTimeSchedule;

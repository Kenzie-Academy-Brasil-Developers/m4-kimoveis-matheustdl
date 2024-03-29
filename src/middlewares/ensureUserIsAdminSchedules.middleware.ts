import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';

const ensureUserIsAdminSchedulesMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const isAdmin = res.locals.admin;

    if (!isAdmin) {
        throw new AppError('Insufficient permission', 403);
    }

    return next();
};
export default ensureUserIsAdminSchedulesMiddleware;

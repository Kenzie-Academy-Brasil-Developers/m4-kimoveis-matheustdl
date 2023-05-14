import { NextFunction, Request, Response } from 'express';
import { AppError } from '../error';

const ensureAdminIsValidMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const isAdmin = res.locals.admin;
    const isId = parseInt(res.locals.id);
    const UserId = parseInt(req.params.id);

    if (!isAdmin && isId !== UserId) {
        throw new AppError('Insufficient permission', 403);
    }

    return next();
};
export default ensureAdminIsValidMiddleware;

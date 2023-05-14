import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';

const ensureDataValidMiddleware =
    (Schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction) => {
        const validatedData = Schema.parse(req.body);

        req.body = validatedData;

        return next();
    };

export default ensureDataValidMiddleware;

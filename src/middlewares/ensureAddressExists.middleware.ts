import { NextFunction, Request, Response } from 'express';
import { Address } from '../entities';
import { AppDataSource } from '../data-source';

const ensureExistsAddressMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | Response> => {
    const validateAddress = req.body;
    req.body = validateAddress;

    const zipCode = req.body.address.zipCode;

    if (zipCode) {
        const addressRepository = AppDataSource.getRepository(Address);
        const existingZipCode = await addressRepository.findOne({
            where: { zipCode },
        });

        if (existingZipCode) {
            return res.status(409).json({ message: 'Address already exists' });
        }

        return next();
    }
};

export default ensureExistsAddressMiddleware;

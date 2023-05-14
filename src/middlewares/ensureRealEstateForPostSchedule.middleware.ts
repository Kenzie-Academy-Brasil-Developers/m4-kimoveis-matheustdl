import { NextFunction, Request, Response } from 'express';
import { RealEstate } from '../entities';
import { AppDataSource } from '../data-source';

const ensureRealEstateForScheduleExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | Response<any, Record<string, any>>> => {
    const { realEstateId } = req.body;

    const realEstateRepository = AppDataSource.getRepository(RealEstate);
    const existRealEstate = await realEstateRepository.findOneBy({
        id: Number(realEstateId),
    });

    if (!existRealEstate) {
        return res.status(404).json({ message: 'RealEstate not found' });
    }

    next();
};

export default ensureRealEstateForScheduleExists;

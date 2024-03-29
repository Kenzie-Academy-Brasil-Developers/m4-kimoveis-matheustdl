import { NextFunction, Request, Response } from 'express';
import { RealEstate } from '../entities';
import { AppDataSource } from '../data-source';

const ensureExistsRealEstate = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void | Response<any, Record<string, any>>> => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'ID is missing' });
    }

    const realEstateRepository = AppDataSource.getRepository(RealEstate);
    const existRealEstate = await realEstateRepository.findOneBy({
        id: Number(id),
    });

    if (!existRealEstate) {
        return res.status(404).json({ message: 'RealEstate not found' });
    }

    next();
};

export default ensureExistsRealEstate;

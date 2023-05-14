import { Response, Request } from 'express';
import { RealEstate } from '../entities';
import {
    TEstateRequest,
    TEstateResponse,
} from '../interfaces/realEstate.interfaces';
import createRealEstateService from '../services/realEstate/createRealEstate.service';
import listAllRealEstateService from '../services/realEstate/listAllRealEstate.service';

const createRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateData: TEstateRequest = req.body;
    const newRealEstate: RealEstate = await createRealEstateService(
        realEstateData
    );

    return res.status(201).json(newRealEstate);
};

const listAllRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstate: Array<TEstateResponse> = await listAllRealEstateService();
    return res.status(200).json(realEstate);
};

export { createRealEstateController, listAllRealEstateController };

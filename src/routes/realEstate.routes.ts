import { Router } from 'express';
import ensureTokenValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import {
    createRealEstateController,
    listAllRealEstateController,
} from '../controllers/realEstate.controller';
import ensureAdminIsValidMiddleware from '../middlewares/ensureAdminIsValid.middleware';
import ensureDataValidMiddleware from '../middlewares/ensureDataValid.middleware';
import { estateRequestSchema } from '../schemas/realEstate.schemas';
import ensureExistsAddressMiddleware from '../middlewares/ensureAddressExists.middleware';

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
    '',
    ensureTokenValidMiddleware,
    ensureAdminIsValidMiddleware,
    ensureDataValidMiddleware(estateRequestSchema),
    ensureExistsAddressMiddleware,
    createRealEstateController
);

realEstateRoutes.get('', listAllRealEstateController);

export default realEstateRoutes;

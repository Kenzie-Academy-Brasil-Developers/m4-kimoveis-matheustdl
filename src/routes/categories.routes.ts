import { Router } from 'express';
import ensureTokenValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import ensureAdminIsValidMiddleware from '../middlewares/ensureAdminIsValid.middleware';
import {
    createCategoriesController,
    listAllCategoriesController,
    listAllCategoriesRealEstateController,
} from '../controllers/categories.controller';
import ensureNameExistsMiddleware from '../middlewares/ensureNameAlreadyExists.middleware';
import ensureExistsCategoryMiddleware from '../middlewares/ensureCategoryAlreadyExists.middleware';

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
    '',
    ensureTokenValidMiddleware,
    ensureAdminIsValidMiddleware,
    ensureNameExistsMiddleware,
    createCategoriesController
);

categoriesRoutes.get('', listAllCategoriesController);

categoriesRoutes.get(
    '/:id/realEstate',
    ensureExistsCategoryMiddleware,
    listAllCategoriesRealEstateController
);
export default categoriesRoutes;

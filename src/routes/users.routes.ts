import { Router } from 'express';
import {
    createUsersController,
    deleteUsersController,
    listUsersControllers,
    updateUsersController,
} from '../controllers/users.controllers';
import ensureDataValidMiddleware from '../middlewares/ensureDataValid.middleware';
import { userRequestSchema, userUpdateSchema } from '../schemas/users.schemas';
import ensureEmailNotExistsMiddleware from '../middlewares/ensureEmailNotExist.middleware';
import ensureAdminIsValidMiddleware from '../middlewares/ensureAdminIsValid.middleware';
import ensureTokenValidMiddleware from '../middlewares/ensureTokenIsValid.middleware';
import ensureUserExistsMiddleware from '../middlewares/ensureUserIdIsValid.middleware';

const userRoutes: Router = Router();

userRoutes.post(
    '',
    ensureDataValidMiddleware(userRequestSchema),
    ensureEmailNotExistsMiddleware,
    createUsersController
);
userRoutes.get(
    '',
    ensureTokenValidMiddleware,
    ensureAdminIsValidMiddleware,
    listUsersControllers
);
userRoutes.patch(
    '/:id',
    ensureUserExistsMiddleware,
    ensureTokenValidMiddleware,
    ensureAdminIsValidMiddleware,
    ensureDataValidMiddleware(userUpdateSchema),
    updateUsersController
);
userRoutes.delete(
    '/:id',
    ensureUserExistsMiddleware,
    ensureTokenValidMiddleware,
    ensureAdminIsValidMiddleware,
    deleteUsersController
);

export default userRoutes;

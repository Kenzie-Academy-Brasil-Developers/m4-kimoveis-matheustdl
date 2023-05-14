import { Router } from 'express';
import createLoginController from '../controllers/login.controller';

const loginRouter = Router();

loginRouter.post('', createLoginController);

export default loginRouter;

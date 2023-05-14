import { Request, Response } from 'express';
import { TLoginRequest } from '../interfaces/login.interfaces';
import { requestLoginSchema } from '../schemas/users.schemas';
import { createSessionService } from '../services/login/CreateLogin.service';

const createLoginController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const LoginData: TLoginRequest = requestLoginSchema.parse(req.body);
    const token: string = await createSessionService(LoginData);
    return res.json({ token: token });
};
export default createLoginController;

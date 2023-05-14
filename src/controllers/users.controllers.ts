import { Request, Response } from 'express';
import {
    TUpdateUserRequest,
    TUserRequest,
    TUserResponse,
} from '../interfaces/users.interfaces';
import createUsersService from '../services/users/createUsers.service';
import listMoviesService from '../services/users/listUsers.service';
import retrieveUsersService from '../services/users/updateUsers.service';
import deleteUsersService from '../services/users/deleteUsers.service';

const createUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TUserRequest = req.body;
    const newUser = await createUsersService(userData);

    return res.status(201).json(newUser);
};
const listUsersControllers = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const users = await listMoviesService();
    return res.status(200).json(users);
};
const updateUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TUpdateUserRequest = req.body;
    const userId: number = parseInt(req.params.id);

    const user: TUserResponse = await retrieveUsersService(userId, userData);

    return res.json(user);
};
const deleteUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = parseInt(req.params.id);
    await deleteUsersService(userId);
    return res.status(204).send();
};
export {
    createUsersController,
    listUsersControllers,
    updateUsersController,
    deleteUsersController,
};

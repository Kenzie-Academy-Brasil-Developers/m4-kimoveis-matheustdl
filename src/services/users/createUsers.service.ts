import { Repository } from 'typeorm';
import User from '../../entities/user.entities';
import { TUserRequest, TUserResponse } from '../../interfaces/users.interfaces';
import { AppDataSource } from '../../data-source';
import { hash } from 'bcrypt';
import { userResponseSchema } from '../../schemas/users.schemas';

const createUsersService = async (
    userData: TUserRequest
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    userData.password = await hash(userData.password, 10);

    const user: User = userRepository.create(userData);
    await userRepository.save(user);

    const returnUser: TUserResponse = userResponseSchema.parse(user);

    return returnUser;
};

export default createUsersService;

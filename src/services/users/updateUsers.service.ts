import { Repository } from 'typeorm';
import {
    TUpdateUserRequest,
    TUserResponse,
} from '../../interfaces/users.interfaces';
import { AppDataSource } from '../../data-source';
import { userResponseSchema } from '../../schemas/users.schemas';
import { User } from '../../entities';
const updateUsersService = async (
    userId: number,
    userData: TUpdateUserRequest
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const oldUserData: User | null = await userRepository.findOneBy({
        id: userId,
    });
    const newUserData: User = userRepository.create({
        ...oldUserData,
        ...userData,
    });
    await userRepository.save(newUserData);
    const returnUser: TUserResponse = userResponseSchema.parse(newUserData);
    return returnUser;
};

export default updateUsersService;

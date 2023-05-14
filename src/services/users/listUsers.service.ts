import { Repository } from 'typeorm';
import { TUserResponse } from '../../interfaces/users.interfaces';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';
import { listUserSchema } from '../../schemas/users.schemas';

const listMoviesService = async (): Promise<TUserResponse[]> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const users: User[] = await userRepository.find();

    const returnUser: TUserResponse[] = listUserSchema.parse(users);

    return returnUser;
};
export default listMoviesService;

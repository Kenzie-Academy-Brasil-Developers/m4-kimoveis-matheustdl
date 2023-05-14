import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Schedule, User } from '../../entities';
import { TScheduleRequest } from '../../interfaces/schedule.interfaces';

const createScheduleService = async (
    userId: number,
    scheduleData: TScheduleRequest
): Promise<Schedule> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const scheduleRepository: Repository<Schedule> =
        AppDataSource.getRepository(Schedule);

    const user: User | null = await userRepository.findOneBy({ id: userId });

    const newSchedule: Schedule = scheduleRepository.create({
        ...scheduleData,
        user: user!,
    });

    await scheduleRepository.save(newSchedule);

    return newSchedule;
};

export default createScheduleService;

import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { RealEstate } from '../../entities';

const listAllSchedulesService = async (
    id: number
): Promise<RealEstate | null> => {
    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate | null = await realEstateRepository
        .createQueryBuilder('real_estate')
        .leftJoinAndSelect('real_estate.address', 'address')
        .leftJoinAndSelect('real_estate.category', 'category')
        .innerJoinAndSelect('real_estate.schedules', 'schedules')
        .innerJoinAndSelect('schedules.user', 'user')
        .where('real_estate.id = scheduleId', { id })
        .getOne();

    return realEstate;
};

export default listAllSchedulesService;

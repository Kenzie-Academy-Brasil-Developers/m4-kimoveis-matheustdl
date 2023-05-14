import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { RealEstate } from '../../entities';
import { TEstateResponse } from '../../interfaces/realEstate.interfaces';

const listAllRealEstateService = async (): Promise<TEstateResponse[]> => {
    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const newRealEstates: Array<RealEstate> = await realEstateRepository.find({
        relations: { address: true },
    });

    return newRealEstates;
};

export default listAllRealEstateService;

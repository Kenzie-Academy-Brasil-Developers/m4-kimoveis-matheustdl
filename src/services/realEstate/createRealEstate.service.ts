import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { TEstateRequest } from '../../interfaces/realEstate.interfaces';
import { AppError } from '../../error';
import { Address, Category, RealEstate } from '../../entities';

const createRealEstateService = async (
    realEstateData: TEstateRequest
): Promise<RealEstate> => {
    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const realEstateRepository: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const addressRepository: Repository<Address> =
        AppDataSource.getRepository(Address);

    const newCategory: Category | null = await categoryRepository.findOne({
        where: { id: realEstateData.categoryId },
    });

    if (!newCategory) {
        throw new AppError('Category not found', 404);
    }

    const newAddress: Address = addressRepository.create({
        street: realEstateData.address.street,
        number: realEstateData.address.number,
        city: realEstateData.address.city,
        state: realEstateData.address.state,
        zipCode: realEstateData.address.zipCode,
    });

    await addressRepository.save(newAddress);

    const realEstate: RealEstate = realEstateRepository.create({
        value: realEstateData.value,
        size: realEstateData.size,
        address: newAddress,
        category: newCategory,
    });

    await realEstateRepository.save(realEstate);

    return realEstate;
};

export default createRealEstateService;

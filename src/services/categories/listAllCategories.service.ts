import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';

const listAllCategoriesService = async (): Promise<Category[]> => {
    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const newCategory: Category[] = await categoryRepository

        .createQueryBuilder('categories')

        .select(['categories.id', 'categories.name'])

        .getMany();

    return newCategory;
};

export default listAllCategoriesService;

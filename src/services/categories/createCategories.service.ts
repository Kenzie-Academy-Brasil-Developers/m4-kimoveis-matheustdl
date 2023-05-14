import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Category } from '../../entities';
import { TCategoryRequest } from '../../interfaces/category.interfaces';

const createCategoriesService = async (
    categoriesData: TCategoryRequest
): Promise<Category> => {
    const categoryRepository: Repository<Category> =
        AppDataSource.getRepository(Category);

    const newCategory: Category = categoryRepository.create(categoriesData);

    await categoryRepository.save(newCategory);

    return newCategory;
};

export default createCategoriesService;

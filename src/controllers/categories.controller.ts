import { Response, Request } from 'express';
import { TCategoryRequest } from '../interfaces/category.interfaces';
import { Category } from '../entities';
import createCategoriesService from '../services/categories/createCategories.service';
import listAllCategoriesService from '../services/categories/listAllCategories.service';
import listAllCategoriesByRealEstateService from '../services/categories/listAllCategoriesOnRealEstate.service';

const createCategoriesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categoriesData: TCategoryRequest = req.body;

    const newCategory: Category = await createCategoriesService(categoriesData);

    return res.status(201).json(newCategory);
};

const listAllCategoriesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const category = await listAllCategoriesService();
    return res.json(category);
};

const listAllCategoriesRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categoryId: number = Number(req.params.id);
    const categoryrealEstate: Category | null =
        await listAllCategoriesByRealEstateService(categoryId);
    return res.json(categoryrealEstate);
};

export {
    createCategoriesController,
    listAllCategoriesController,
    listAllCategoriesRealEstateController,
};

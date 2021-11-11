import { Category } from '@url/shared/types';
import { SpreeCategory } from '../types/category';
import { ProductMapper } from './product';

export class CategoryMapper {
  static mapSpreeCategoryToCategory(category: SpreeCategory): Category {
    const tmpCategory: SpreeCategory = {...category};
    const products = [...ProductMapper.mapSpreeProductsToProducts(tmpCategory.products)];
    const parent = {...(category.parent || {})}
    // TODO: remove unnecessary
    // delete (tmpCategory as any).cms_sections;
    return ({
      ...tmpCategory,
      products,
    }) as Category
  }

  static mapSpreeCategoriesToCategories(categories: SpreeCategory[] = []): Category[] {
    return categories.map(CategoryMapper.mapSpreeCategoryToCategory);
  }
}

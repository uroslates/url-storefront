import { Category } from '@url/shared/types';
import { SpreeCategory, ISpreeConfig } from '../types';
import { ProductMapper } from './product';

export class CategoryMapper {
  static mapSpreeCategoryToCategory(category: SpreeCategory, config: ISpreeConfig): Category {
    const tmpCategory: SpreeCategory = {...category};
    const products = [...ProductMapper.mapSpreeProductsToProducts(tmpCategory.products, config)];
    const parent = {...(category.parent || {})}
    // TODO: remove unnecessary
    // delete (tmpCategory as any).cms_sections;
    return ({
      ...tmpCategory,
      products,
    }) as Category
  }

  static mapSpreeCategoriesToCategories(categories: SpreeCategory[] = [], config: ISpreeConfig): Category[] {
    return categories.map(category => CategoryMapper.mapSpreeCategoryToCategory(category, config));
  }
}

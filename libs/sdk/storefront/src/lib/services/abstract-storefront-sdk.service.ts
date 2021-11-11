import { Observable } from 'rxjs';
import { Product, Category, Page } from '@url/shared/types';
import { IQueryOptions } from './storefront-sdk.service';

export abstract class AbstractStorefrontSdkService {

  abstract homePage(): Observable<Page>;

  abstract categories(options?: IQueryOptions): Observable<Category[]>;

  abstract category(slug: string, options?: IQueryOptions): Observable<Category>;

  abstract categoryProducts(categoryId: string, options?: IQueryOptions): Observable<Product[]>;

  abstract topCategories(categoryIds?: string[]): Observable<Category[]>;

  abstract product(productSlug: string): Observable<Product>;

}

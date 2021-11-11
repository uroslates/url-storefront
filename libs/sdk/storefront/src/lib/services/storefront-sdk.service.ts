import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractStorefrontSdkService } from './abstract-storefront-sdk.service';
import { Product, Category, Page } from '@url/shared/types';

export interface IQueryOptions {
  sort?: string;
  include?: string;
}

export enum SortValues {
  default = '',
  nameAsc = 'name',
  nameDesc = '-name',
  priceAsc = 'price',
  priceDesc = '-price',
  newestToOldest = '-created_at',
}

@Injectable({
  providedIn: 'root'
})
export class StorefrontSdkService implements AbstractStorefrontSdkService {

  homePage(): Observable<Page> {
    throw Error('Not implemented');
  }

  categories(options?: IQueryOptions): Observable<Category[]> {
    throw Error('Not implemented');
  }

  category(slug: string, options?: IQueryOptions): Observable<Category> {
    throw Error('Not implemented');
  }

  categoryProducts(categoryId: string, options?: IQueryOptions): Observable<Product[]> {
    throw Error('Not implemented');
  }

  topCategories(categoryIds?: string[]): Observable<Category[]> {
    throw Error('Not implemented');
  }

  product(productSlug: string): Observable<Product> {
    throw Error('Not implemented');
  }

}

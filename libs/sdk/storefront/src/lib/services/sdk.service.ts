import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQueryOptions, StorefrontSdkService } from './storefront-sdk.service';
import { Product, Category, Page } from '@url/shared/types';

/**
 * Storefront SdkService responsible for providing data to the application.
 * Its a proxy service intended to delegate the calls to the congifured BackEnd.
 * 
 * In order to switch the BackEnd provider you need to create a service
 * implementing AbstractStorefrontSdkService and implement required methods.
 * Once you do that you can configure your app's main module to use your implementation
 * instead of StorefrontSdkService by specifying following:
 * providers: [
 *  { provide: StorefrontSdkService, useClass: MyActualStorefrontBeSdkService },
 * ]
 */
@Injectable({
  providedIn: 'root'
})
export class SdkService {

  constructor(private storefrontSdkService: StorefrontSdkService) {}

  homePage(): Observable<Page> {
    return this.storefrontSdkService.homePage();
  }

  categories(options?: IQueryOptions): Observable<Category[]> {
    return this.storefrontSdkService.categories(options);
  }

  category(slug: string, options?: IQueryOptions): Observable<Category> {
    return this.storefrontSdkService.category(slug, options);
  }

  categoryProducts(categoryId: string, options?: IQueryOptions): Observable<Product[]> {
    return this.storefrontSdkService.categoryProducts(categoryId, options);
  }

  topCategories(categoryIds?: string[]): Observable<Category[]> {
    return this.storefrontSdkService.topCategories(categoryIds);
  }

  product(id: string): Observable<Product> {
    return this.storefrontSdkService.product(id);
  }

}

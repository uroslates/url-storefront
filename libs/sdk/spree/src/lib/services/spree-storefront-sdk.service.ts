import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, from } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { AbstractStorefrontSdkService, IQueryOptions } from '@url/sdk/storefront';
import { Product, Category, Page, LineItem, Cart } from '@url/shared/types';
import { Client } from '@spree/storefront-api-v2-sdk';
// @ts-ignore
import { makeClient } from '../dist/client';
import * as JSONAPISerializer from 'json-api-serializer';
import { Constants } from '../constants';
import { SpreePage } from '../types/page';
import { PageMapper } from '../mappers/page';
import { ProductMapper } from '../mappers/product';
import { SpreeProduct } from '../types/product';
import { CategoryMapper } from '../mappers/category';
import { SpreeCategory } from '../types/category';
import { SpreeCart } from '../types/cart';
import { CartMapper } from '../mappers/cart';

export interface ISpreeConfig {
  host: string;
}
export const SpreeConfig = new InjectionToken<ISpreeConfig>('SpreeConfig');

@Injectable({
  providedIn: 'root'
})
export class SpreeStorefrontSdkService implements AbstractStorefrontSdkService {
  private client: Client;
  private jsonApiSerializer: any;

  constructor(@Inject(SpreeConfig) private config: ISpreeConfig) {
    console.log('Spree configuration provided', config);
    this.client = makeClient(this.config);
    this.registerSerializerModels()
  }

  private registerSerializerModels() {
    this.jsonApiSerializer = new JSONAPISerializer();
    this.jsonApiSerializer.register('category', { id: 'id' });
    this.jsonApiSerializer.register('product', { id: 'id' });
    this.jsonApiSerializer.register('option_type', { id: 'id' });
    this.jsonApiSerializer.register('taxon', { id: 'id' });
    this.jsonApiSerializer.register('variant', { id: 'id' });
    this.jsonApiSerializer.register('image', { id: 'id' });
    this.jsonApiSerializer.register('product_property', { id: 'id' });
    this.jsonApiSerializer.register('option_value', { id: 'id' });
    this.jsonApiSerializer.register('page', { id: 'id' });
    this.jsonApiSerializer.register('cms_section', { id: 'id' });
  }

  categories(query?: IQueryOptions): Observable<Category[]> {
    console.log('Reaching out to Spree SDK for categories...');
    return this.requestDeserializer(this.client.taxons.list({
        include: 'children',
        page: 1
      }
    ))
  }

  category(categorySlug: string, options: IQueryOptions = {}): Observable<Category> {
    console.log(`Reaching out to Spree SDK for category "${categorySlug}"...`, options);
    options = options || {};
    const query = {
      ...options,
      filter: {
        permalink: categorySlug
      },
      include: options.include || 'products.images,products.product_properties,products.option_types',
    };
    return this.requestDeserializer(this.client.taxons.show(categorySlug, query)).pipe(
      map(jsonApiResponse => {
        const deserializedCategoryResult: SpreeCategory = this.jsonApiSerializer.deserialize('category', jsonApiResponse);
        console.log('[Spree::Data:Response:Deserialzied]', deserializedCategoryResult)
        return deserializedCategoryResult;
      }),
      map(CategoryMapper.mapSpreeCategoryToCategory)
    );
  }

  categoryProducts(categoryId: string, options: IQueryOptions = {}): Observable<Product[]> {
    console.log('Reaching out to Spree SDK for category products...');
    const query = {
      ...(options || {}),
      filter: {
        taxons: categoryId
      },
      include: 'default_variant,images,product_properties,option_types',
      page: 1
    };
    return this.requestDeserializer(this.client.products.list({}, query)).pipe(
      map(jsonApiResponse => {
        const deserializedCategoryProductsResult: SpreeProduct[] = this.jsonApiSerializer.deserialize('product', jsonApiResponse);
        console.log('[Spree::Data:Response:Deserialzied]', deserializedCategoryProductsResult)
        return deserializedCategoryProductsResult;
      }),
      map(ProductMapper.mapSpreeProductsToProducts)
    );
  }

  /**
   * Retrieves page based on provided pageId.
   * 
   * @param pageId requested page id
   * @returns Observable oDeserializes spreef matched Page type
   */
  page(pageId: string): Observable<Page> {
    console.log(`Reaching out to Spree SDK for page <${pageId}>...`);
    return this.requestDeserializer(this.client.pages.show(pageId, {
      include: 'cms_sections.linked_resource',
    })).pipe(
      map(jsonApiResponse => {
        const deserializedResult: SpreePage = this.jsonApiSerializer.deserialize('page', jsonApiResponse);
        console.log('[Spree::Data:Response:Deserialzied:Pages]', deserializedResult)
        return deserializedResult;
      }),
      map(PageMapper.mapSpreePageToPage)
    );
  }

  homePage(): Observable<Page> {
    return this.page(Constants.pages.homePageId);
  }

  topCategories(categoryIds: string[] = []): Observable<Category[]> {
    if (categoryIds.length === 0) {
      // in lack of BE EndDeserializes spreepoint (providing configured top categories) we'll predefine the selection here
      categoryIds = Constants.categories.topCategoriesIds;
    }
    console.log(`Reaching out to Spree SDK for category [${categoryIds.join(',')}]...`);
    return this.requestDeserializer(this.client.taxons.list({
        filter: {
          ids: categoryIds.join(',')
        }
      })).pipe(
        map(jsonApiResponse => {
          const deserializedCategoriesResult: SpreeCategory[] = this.jsonApiSerializer.deserialize('category', jsonApiResponse);
          console.log('[Spree::Data:Response:Deserialzied]', deserializedCategoriesResult)
          return deserializedCategoriesResult;
        }),
        map(CategoryMapper.mapSpreeCategoriesToCategories)
      );
  }

  product(productSlug: string): Observable<Product> {
    console.log(`Reaching out to Spree SDK for product "${productSlug}"...`);
    return this.requestDeserializer(this.client.products.show(productSlug, undefined, {
      filter: {
        permalink: productSlug
      },
      include: 'images,taxons,variants,product_properties,option_types,option_types.option_values',
    })).pipe(
      map(jsonApiResponse => {
        const deserializedProductResult: SpreeProduct = this.jsonApiSerializer.deserialize('product', jsonApiResponse);
        console.log('[Spree::Data:Response:Deserialzied]', deserializedProductResult)
        return deserializedProductResult;
      }),
      map(ProductMapper.mapSpreeProductToProduct)
    );
  }

  addItemToCart(item: LineItem, options?: any): Observable<Cart> {
    console.log(`Reaching out to Spree SDK for adding item to Cart...`, item, options);
    const token = (options || {}).token;
    const payload = {
      variant_id: item.variant.id,
      quantity: item.quantity,
      options: {
          
      }
    };
    return this.requestDeserializer(this.client.cart.addItem(token, payload)).pipe(
      map(jsonApiResponse => {
        const deserializedCartResult: SpreeCart = this.jsonApiSerializer.deserialize('product', jsonApiResponse);
        console.log('[Spree::Data:Response:Deserialzied]', deserializedCartResult)
        return deserializedCartResult;
      }),
      map(CartMapper.mapSpreeCartToCart)
    );
  }

  /**
   * Deserializes/unwraps @spree/storefront-api-v2-sdk response to JsonApi
   * in case of success or error in case of error and converts Promises to
   * rxjs Observables.
   * 
   * @param response$ 
   * @returns Observable of JsonApi Object
   */
  requestDeserializer(response$: Promise<any>) {
    return from(response$).pipe(
      tap(response => console.log('[Spree::Raw:Response]', response)),
      map(response => this.spreeStorefrontApiV2SdkResponseDeserializer(response)),
      catchError(error => {
        console.error('Handle errors in observer catchError', error)
        // TODO: map to internal Storefront model (specific to our Storefront app)
        throw error;
      })
    );
  }

  /**
   * Deserializes (unwraps) @spree/storefront-api-v2-sdk (Spree API v2) responses
   * 
   * @param response @spree/storefront-api-v2-sdk method calls raw response
   * @returns 
   */
  private spreeStorefrontApiV2SdkResponseDeserializer(response: any) {
    const {isSuccess, success, fail} = response;
    if (isSuccess()) {
      const result = success();
      console.log('[Spree::Data:Response]', result);
      return result;
    } else {
      const error = fail();
      console.log('[Spree::Error:Response]', error);
      throw error
    }
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorefrontSdkService, SortValues } from '@url/sdk/storefront';
import { combineLatest, Observable, of } from 'rxjs';
import { map, share, switchMap, tap } from 'rxjs/operators';
import { routerPaths } from '../../pages-product.module';
import { Product } from '@url/shared/types';
import { CartStoreService } from "@url/pages/cart";

const shuffle = (array: any[] = []) => array.sort(() => Math.random() - 0.5);

@Component({
  selector: 'url-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productDetails: Observable<Product>;
  productDetailsLoading = false;
  relatedProducts: Observable<Product[]> = of([]);
  relatedProductsLoading = false;

  constructor(
    private sdkService: StorefrontSdkService,
    private route: ActivatedRoute,
    private cardStore: CartStoreService,
  ) {
    const slug: Observable<string> = this.route.params.pipe(
      map(params => params[routerPaths.productSlug])
    );
    this.productDetails = slug.pipe(
      tap(_ => this.productDetailsLoading = true),
      tap(_ => this.relatedProductsLoading = true),
      switchMap(slug => this.sdkService.product(slug)),
      // share stream (hot) subscriptions (avoid prod details api calls dupllication)
      share(),
      tap(_ => this.productDetailsLoading = false),
    );
    
    this.relatedProducts = combineLatest([this.productDetails, slug]).pipe(
      map(([productDetails]) => productDetails.taxons.map(t => t.id)),
      switchMap((categoryIds) => this.sdkService.categoryProducts(categoryIds.join(','), {
        filter: { taxons: `${categoryIds}`},
        // make sure list is dynamic (different each time)
        sort: shuffle(Object.values(SortValues))[0],
        page: 1,
        per_page: 3
      } as any)),
      tap(() => this.relatedProductsLoading = false)
    );
  }

  addToCart(product: Product) {
    this.cardStore.addProductToCart(product, 1);
  }
}

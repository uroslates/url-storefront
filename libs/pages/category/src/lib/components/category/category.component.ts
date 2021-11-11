import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQueryOptions, StorefrontSdkService } from '@url/sdk/storefront';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { map, startWith, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { routerPaths } from '../../pages-category.module';
import { Category, Product } from '@url/shared/types';
import { SortValues } from '@url/sdk/storefront';
import { Breadcrumb, UrlSelectOption } from '@url/shared/ui/storefront';

@Component({
  selector: 'url-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categoryDetails: Observable<Category>;
  categoryProducts: Observable<Product[]> = of([]);
  breadcrumbs: Observable<Breadcrumb[]> = of([]);
  loading = false;
  queryChange: BehaviorSubject<IQueryOptions> = new BehaviorSubject<IQueryOptions>({
    sort: SortValues.default,
    include: '',
  })
  sortByOptions: Observable<UrlSelectOption<string>[]> = of([
    {
      label: 'Default',
      value: SortValues.default
    },{
      label: 'Name (A-Z)',
      value: SortValues.nameAsc
    },
    {
      label: 'Name (Z-A)',
      value: SortValues.nameDesc
    },
    {
      label: 'Price (Low-High)',
      value: SortValues.priceAsc
    },
    {
      label: 'Price (High-Low)',
      value: SortValues.priceDesc
    },
    {
      label: 'Newst to Oldest',
      value: SortValues.newestToOldest
    },
  ]);

  constructor(
    private sdkService: StorefrontSdkService,
    private route: ActivatedRoute
  ) {
    const slug$ = this.route.params.pipe(
      map(params => {
        // In case categories/ path contains nested categories, handle them correcty!
        const categoryRouteSegments = this.route.snapshot.url.reduce((acc: string[], curr) => acc.concat([curr.path]), []).join('/');
        return params[routerPaths.categorySlug] || categoryRouteSegments || '';
      })
    )
    
    this.categoryDetails = slug$.pipe(
      withLatestFrom(this.queryChange),
      tap(() => this.loading = true),
      switchMap(([slug, query]) => 
        this.sdkService.category(`categories/${slug}`, {...query, include: 'children'})
      ),
    )
    
    this.categoryProducts = combineLatest([this.categoryDetails, this.queryChange]).pipe(
      tap(() => this.loading = true),
      switchMap(([category, query]) => this.sdkService.categoryProducts(category.id as string, query)),
      tap((categoryProducts) => console.log('Category products', categoryProducts)),
      tap(() => this.loading = false),
    )

    this.breadcrumbs = slug$.pipe(
      map(slug => {
        return [
          {
            routerLink: `/`,
            label: 'Home'
          },
          {
            routerLink: `/categories/${slug}`,
            label: slug
          }
        ] as Breadcrumb[];
      }),
      startWith([{
        routerLink: `/`,
        label: 'Home'
      }] as Breadcrumb[])
    )
  }

  onSortByChange(selectedOption: UrlSelectOption<string>) {
    console.log('Sort change', selectedOption, this.query);
    this.queryChange.next({
      ...this.query,
      sort: selectedOption.value
    });
  }

  get query(): IQueryOptions {
    return {...this.queryChange.value};
  }

  get selectedSort(): string {
    return this.query.sort || SortValues.default;
  }
}

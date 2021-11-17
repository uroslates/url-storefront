import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@url/shared/types';
import { Breadcrumb } from '../components';

@Pipe({
  name: 'productBreadcrumbs'
})
export class ProductBreadcrumbsPipe implements PipeTransform {
  transform(product: Product, _property?: string): Breadcrumb[] {
    product = product || {};
    return [
      {
        routerLink: `/`,
        label: 'Home'
      },
      ...(product.taxons || []).map((taxon: any) => ({
        // TODO below goes in Spree Product mapper
        routerLink: `/${taxon.permalink}`,
        label: taxon.name
      })),
      {
        routerLink: `/products/${product.slug}`,
        label: product.name
      }
    ];
  }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedUiStorefrontModule } from '@url/shared/ui/storefront';
import { SharedUiCmsModule } from '@url/shared/ui/cms';
import {
  ProductComponent,
  ProductGalleryLoaderPlaceholderComponent,
  ProductDetailsLoaderPlaceholderComponent,
} from './components';

export const routerPaths = {
  productSlug: 'slug'
}

export const COMPONENTS = [
  ProductComponent,
  ProductDetailsLoaderPlaceholderComponent,
  ProductGalleryLoaderPlaceholderComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedUiStorefrontModule,
    SharedUiCmsModule,
    RouterModule.forChild([
      {path: `:${routerPaths.productSlug}`, pathMatch: 'full', component: ProductComponent}
    ]),
  ],
  declarations: [...COMPONENTS, ProductDetailsLoaderPlaceholderComponent],
  exports: [...COMPONENTS],
})
export class PagesProductModule {}

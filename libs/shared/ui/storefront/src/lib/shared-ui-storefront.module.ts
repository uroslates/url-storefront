import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  BreadcrumbComponent,
  ProductListCardComponent,
  ProductsListComponent,
  CategoryListCardComponent,
  SelectboxComponent
} from './components';
import { SharedUiCmsModule } from '@url/shared/ui/cms';
import { SharedTypesModule } from '@url/shared/types';
import { GroupByPipe } from './pipes/group-by.pipe';
import { DefaultProductImagePipe } from './pipes/default-product-image.pipe';
import { ProductBreadcrumbsPipe } from './pipes/product-breadcrumbs.pipe';

export const COMPONENTS: any[] = [
  BreadcrumbComponent,
  ProductListCardComponent,
  ProductsListComponent,
  CategoryListCardComponent,
  SelectboxComponent,
  GroupByPipe,
  DefaultProductImagePipe,
  ProductBreadcrumbsPipe,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedUiCmsModule,
    SharedTypesModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedUiStorefrontModule {}

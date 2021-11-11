import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SdkStorefrontModule } from '@url/sdk/storefront';
import { SharedUiStorefrontModule } from '@url/shared/ui/storefront';
import { SharedUiCmsModule } from '@url/shared/ui/cms';
import { CategoryComponent } from './components/category/category.component';

export const routerPaths = {
  categorySlug: 'slug'
}

@NgModule({
  imports: [
    CommonModule,
    SdkStorefrontModule,
    SharedUiStorefrontModule,
    SharedUiCmsModule,
    RouterModule.forChild([
      {path: `:${routerPaths.categorySlug}`, pathMatch: 'full', component: CategoryComponent},
      // TODO: nested categories page (give entire path (unnamed) to categories serach)
      {path: `**`,  component: CategoryComponent}
    ]),
  ],
  declarations: [
    CategoryComponent
  ],
  exports: [
    CategoryComponent
  ],
})
export class PagesCategoryModule {}

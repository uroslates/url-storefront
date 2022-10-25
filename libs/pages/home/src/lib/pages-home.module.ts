import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent, HomeLoaderPlaceholderComponent } from './components';
import { SdkStorefrontModule } from '@url/sdk/storefront';
import { SharedTypesModule } from '@url/shared/types';
import { SharedUiCmsModule } from '@url/shared/ui/cms';
import { PagesProductModule } from '@url/pages/product';

// Comming from @rl/shared/ui/assets 
export const noImagePlaceholder = './shared/assets/images/product-placeholder-1.jpeg';

const COMPONENTS = [
  HomeComponent,
  HomeLoaderPlaceholderComponent
]

@NgModule({
  imports: [
    CommonModule,
    SdkStorefrontModule,
    SharedTypesModule,
    SharedUiCmsModule,
    PagesProductModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HomeComponent}
    ]),
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class PagesHomeModule {}

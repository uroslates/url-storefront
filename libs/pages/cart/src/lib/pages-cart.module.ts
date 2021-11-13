import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { SharedTypesModule } from '@url/shared/types';
import { SdkStorefrontModule } from '@url/sdk/storefront';
import { SharedUiStorefrontModule } from "@url/shared/ui/storefront";

@NgModule({
  imports: [
    CommonModule,
    SharedTypesModule,
    SdkStorefrontModule,
    SharedUiStorefrontModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: CartComponent}
    ]),
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ],
})
export class PagesCartModule {}

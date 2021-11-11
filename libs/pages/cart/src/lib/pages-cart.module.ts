import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
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

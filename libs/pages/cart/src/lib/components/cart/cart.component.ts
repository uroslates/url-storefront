import { Component } from '@angular/core';
import { CartStoreService } from '../../store/cart-store.service';

@Component({
  selector: 'url-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  readonly vm$ = this.store.vm$;

  constructor(readonly store: CartStoreService) {}
}

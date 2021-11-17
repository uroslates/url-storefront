import { Cart } from '@url/shared/types';
import { SpreeCart } from '../types';

export class CartMapper {
  static mapSpreeCartToCart(cart: SpreeCart): Cart {
    const lineItems = (cart || {}).line_items || [];
    return {
      ...cart,
      lineItems
    } as Cart
  }
}

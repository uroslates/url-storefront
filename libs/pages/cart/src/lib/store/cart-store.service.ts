import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { StorefrontSdkService } from '@url/sdk/storefront';
import { LineItem, Product } from '@url/shared/types';
import { Observable } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';


export interface CartStoreState{
  saving: boolean;
  loading: boolean;
  lineItems: LineItem[];
  errors?: any[];
  // Computed properties
  isLoading?: boolean;
  isEmpty?: boolean;
  totalItems?: number;
  products?: Product[];
}

export const defaultState: CartStoreState = {
  loading: false,
  saving: false,
  lineItems: [],
}

@Injectable({ providedIn: 'root' })
export class CartStoreService extends ComponentStore<CartStoreState>  {
  readonly loading$ = this.select((s) => s.loading);
  readonly errors$ = this.select((s) => s.errors);
  readonly saving$ = this.select((s) => s.saving);
  readonly lineItems$ = this.select((s) => s.lineItems);

  readonly vm$: Observable<CartStoreState> = this.select(
    this.loading$,
    this.saving$,
    this.errors$,
    this.lineItems$,
    (loading = false, saving = false, errors, lineItems = []) => ({
      errors,
      loading,
      saving,
      lineItems,
      products: lineItems.map(li => li.variant),
      isLoading: loading && !lineItems.length,
      isEmpty: !loading && !lineItems.length,
      totalItems: lineItems.reduce((total, li) => total + (li.quantity || 0), 0) || 0,
    }),
  )

  constructor(private sdkService: StorefrontSdkService) {
    super(defaultState);
  }

  readonly addToCart$ = this.effect((lineItem$: Observable<LineItem>) => lineItem$.pipe(
    withLatestFrom(this.lineItems$),
    tap(([lineItem, lineItems]) => this.patchState({
      lineItems: [...lineItems, {...(lineItem)}],
      saving: true
    })),
      // switchMap(([lineItem]) =>
      //   this.sdkService.addItemToCart(lineItem).pipe(
      //     tapResponse(
      //       (cart: Cart) => this.patchState({
      //           saving: false,
      //           lineItems: cart.lineItems,
      //         } as any),
      //       (errors: any) => {
      //         console.error('Error adding Item to the Cart!', errors)
      //         super.patchState({
      //           saving: false,
      //           errors: errors
      //         } as any)
      //       },
      //     ),
      //   ),
      // ),
    ),
  )

  addProductToCart(variant: Product, quantity: number = 1) {
    const item: LineItem = { variant, quantity } as LineItem;
    return this.addToCart$(item);
  }
}

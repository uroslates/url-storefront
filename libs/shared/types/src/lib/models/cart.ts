import { Record } from "./base";
import { Product } from "./product";

export interface Cart extends Record {
  lineItems: LineItem[];
}

export interface LineItem extends Record {
  variant: Product;
  quantity: number;
}
import { Record } from "./page";

export interface SpreeProduct extends Record {
  available: boolean;
  available_on: string;
  backorderable: boolean;
  compare_at_price: string;
  currency: string;
  default_variant: any;
  description: string;
  display_compare_at_price: string;
  display_price: string;
  id: string;
  images: any[];
  in_stock: boolean;
  meta_description: string;
  meta_keywords: string;
  name: string;
  option_types: any[];
  price: string;
  primary_variant: string;
  product_properties: any[];
  purchasable: boolean;
  sku: string;
  slug: string;
  taxons: any[];
  updated_at: string;
  variants?: SpreeProduct[];
  option_values?: SpreeOptionValue[];
}

export interface SpreeImageStyle {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface SpreeProductImage extends Record {
  alt: string;
  original_url: string;
  position: number;
  styles: SpreeImageStyle[];
  transformed_url: string;
}

export interface SpreeOptionType extends Record {
  name: string;
  option_values: SpreeOptionValue[];
  position: number;
  presentation: string;
}

export interface SpreeOptionValue extends Record {
  name?: string;
  option_type?: string;
  position?: number;
  presentation?: string;
}
import { NamedRecord, Record } from "./base";
import { Taxon } from "./category";
import { Image } from "./image";

export interface Product extends NamedRecord {
  available: boolean;
  currency: string;
  defaultVariant: ProductVariant;
  displayPrice: string;
  images: Image[];
  inStock: boolean;
  price: string;
  productProperties: ProductProperties[];
  purchasable: boolean;
  backorderable?: boolean;
  sku: string;
  slug: string;
  taxons: Taxon[];
  updated_at: string;
  variants: ProductVariant[];
  optionTypes?: OptionType[];
}

export interface ProductVariant extends Partial<Product> {
  optionValues?: OptionValue[];
  product?: string;
  options_text?: string;
}

export interface ProductProperties extends NamedRecord {
  filter_param: string;
  value: string;
}

export interface OptionType extends Record {
  name: string;
  optionValues: OptionValue[];
  position: number;
  presentation: string;
}

export interface OptionValue extends Record {
  name: string;
  optionType: OptionType;
  position: number;
  presentation: string;
}
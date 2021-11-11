import { NamedRecord } from "./base";
import { Product } from "./product";

export interface Taxon extends NamedRecord {
  children: Taxon[];
  depth: number;
  image?: string;
  is_child: boolean;
  is_leaf: boolean;
  is_root: boolean;
  left: number
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  parent?: Taxon
  permalink: string
  position: number;
  pretty_name: string;
  right: number;
  seo_title: string;
  taxonomy: string;
  updated_at: string;
}

export interface Category extends Partial<Taxon> {
  products?: Product[];
}

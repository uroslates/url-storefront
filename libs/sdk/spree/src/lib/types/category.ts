import { Record } from "./page";
import { SpreeProduct } from "./product";

export interface SpreeCategory extends Record {
  depth: number;
  description?: string;
  image?: string;
  is_child: boolean;
  is_leaf: boolean;
  is_root: boolean;
  left: number;
  meta_description: string;
  meta_keywords: string;
  meta_title: string;
  name: string;
  parent: any;
  permalink: string;
  position: number;
  pretty_name: string;
  products: SpreeProduct[];
  right: number;
  seo_title: string;
  taxonomy: string;
  updated_at: string;
}

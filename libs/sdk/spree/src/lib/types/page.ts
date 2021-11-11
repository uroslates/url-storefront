export interface Record {
  id: string;
}

export interface SpreePage extends Record {
  title: string;
  content: string;
  locale: string;
  meta_description: string;
  meta_title: string;
  slug: string;
  type: string;
  cms_sections: SpreePageCmsSection[];
}

export interface SpreePageCmsSection extends Record {  
  content: any;
  settings: any;
  link: string;
  fit: string;
  name: string;
  type: string;
  position: number;
  img_one_sm: string;
  img_one_md: string;
  img_one_lg: string;
  img_one_xl: string;
  img_two_sm: string;
  img_two_md: string;
  img_two_lg: string;
  img_two_xl: string;
  img_three_sm: string;
  img_three_md: string;
  img_three_lg: string;
  img_three_xl: string;
  is_full_screen: boolean;
}
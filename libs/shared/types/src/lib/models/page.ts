import { Record } from "./base";

export interface Page extends Record {
  title: string;
  content: string;
  locale: string;
  meta_description: string;
  meta_title: string;
  slug: string;
  type: string;
  cmsSections: PageCmsSection[];
}

export enum PageCmsSectionTypeEnum {
  ImageGallery = 'ImageGallery',
  SideBySideImages = 'SideBySideImages',
  HeroImage = 'HeroImage',
  ProductCarousel = 'ProductCarousel',
}

export interface BasePageCmsSection extends Record {  
  content: any;
  name: string;
  settings: any;
  link: string;
  fit: string;
  type: PageCmsSectionTypeEnum;
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

export interface SubSectionImage {
  lg?: string;
  md?: string;
  sm?: string;
  xl?: string;
}

export interface  PageCmsSubSection {
  img: SubSectionImage;
  link: string;
  linkType: string;
  title: string;
}

export interface ImageGalleryPageCmsSection extends Record {
  id: string;
  name: string;
  position: number;
  settings: string;
  fit: string;
  isFullscreen: boolean;
  link: string;
  subSections: PageCmsSubSection[];
  type: PageCmsSectionTypeEnum.ImageGallery | PageCmsSectionTypeEnum.SideBySideImages;
}

export type PageCmsSection = ImageGalleryPageCmsSection | BasePageCmsSection;
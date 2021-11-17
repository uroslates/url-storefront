import { Page, PageCmsSection, PageCmsSectionTypeEnum, ImageGalleryPageCmsSection } from '@url/shared/types';
import { SpreePage, SpreePageCmsSection, ISpreeConfig } from "../types";

export class PageMapper {
  static mapSpreePageToPage(page: SpreePage, config: ISpreeConfig): Page {
    const tmpPage = {...page};
    const cmsSections = [...PageCmsSectionMapper.mapSpreeCmsSectionToPageCmSections(tmpPage.cms_sections, config)];
    delete (tmpPage as any).cms_sections;
    return ({
      ...tmpPage,
      cmsSections,
      type: (tmpPage.type || '').replace('Spree::Cms::Pages::', '')
    })
  }
}

export class PageCmsSectionMapper {
  static mapSpreeCmsSectionToPageCmSection(pageSection: SpreePageCmsSection, config: ISpreeConfig): PageCmsSection {
    const type: string = (pageSection.type || '').replace('Spree::Cms::Sections::', '') as PageCmsSectionTypeEnum;
    let mappedCmsSection;
    if (type === PageCmsSectionTypeEnum.ImageGallery || type === PageCmsSectionTypeEnum.SideBySideImages) {
      mappedCmsSection = PageCmsSectionMapper.mapSpreeCmsSectionImagesToImages(pageSection, config);
    } else {
      // TODO: handle unhandled section types here (if there's something specific to them)
      mappedCmsSection = PageCmsSectionMapper.mapSpreeCmsSectionImagesToImages(pageSection, config);
    }
    return ({
      ...{...mappedCmsSection},
      isFullscreen: pageSection.is_full_screen,
      title: pageSection.name,
      type,
      link: (pageSection.link || '').replace('/t/', '/')
    }) as PageCmsSection;
  }

  static mapSpreeCmsSectionImagesToImages(pageSection: SpreePageCmsSection, config: ISpreeConfig): ImageGalleryPageCmsSection {
    const spreeSubSectionDenominators = ['one', 'two', 'three'];
    // TODO: below comes from config
    const imagePrefix = config.imagePrefix;
    const noImagePlaceholder = config.noImagePlaceholder;
    return ({
      subSections: spreeSubSectionDenominators
        .map(denominator => (
          (pageSection.content || {} as any)[`link_${denominator}`] ||
          (pageSection.content || {} as any)[`link_type_${denominator}`] ||
          (pageSection.content || {} as any)[`title_${denominator}`] ||
          (
          (pageSection as any)[`img_${denominator}_lg`] ||
          (pageSection as any)[`img_${denominator}_md`] ||
          (pageSection as any)[`img_${denominator}_sm`] ||
          (pageSection as any)[`img_${denominator}_xl`]
          ) ?
          {
            link: (pageSection.content || {} as any)[`link_${denominator}`] || pageSection.link.replace('/t', ''),
            linkType: (pageSection.content || {} as any)[`link_type_${denominator}`],
            title: (pageSection.content || {} as any)[`title_${denominator}`],
            img: (
              (pageSection as any)[`img_${denominator}_lg`] ||
              (pageSection as any)[`img_${denominator}_md`] ||
              (pageSection as any)[`img_${denominator}_sm`] ||
              (pageSection as any)[`img_${denominator}_xl`]
              ) ? {
              lg: (pageSection as any)[`img_${denominator}_lg`] ? `${imagePrefix}${(pageSection as any)[`img_${denominator}_lg`]}` : noImagePlaceholder,
              md: (pageSection as any)[`img_${denominator}_md`] ? `${imagePrefix}${(pageSection as any)[`img_${denominator}_md`]}` : noImagePlaceholder,
              sm: (pageSection as any)[`img_${denominator}_sm`] ? `${imagePrefix}${(pageSection as any)[`img_${denominator}_sm`]}` : noImagePlaceholder,
              xl: (pageSection as any)[`img_${denominator}_xl`] ? `${imagePrefix}${(pageSection as any)[`img_${denominator}_xl`]}` : noImagePlaceholder,
            } : undefined
          } : undefined
        ))
        .filter(subSection => !!subSection)
    }) as ImageGalleryPageCmsSection;
  }
  
  static mapSpreeCmsSectionToPageCmSections(pageSections: SpreePageCmsSection[] = [], config: ISpreeConfig): PageCmsSection[] {
    return pageSections.map(pageSection => PageCmsSectionMapper.mapSpreeCmsSectionToPageCmSection(pageSection, config));
  }
}

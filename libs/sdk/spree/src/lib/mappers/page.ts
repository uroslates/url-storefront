import { Page, PageCmsSection, PageCmsSectionTypeEnum, ImageGalleryPageCmsSection } from '@url/shared/types';
import { SpreePage, SpreePageCmsSection } from "../types/page";

export class PageMapper {
  static mapSpreePageToPage(page: SpreePage): Page {
    const tmpPage = {...page};
    const cmsSections = [...PageCmsSectionMapper.mapSpreeCmsSectionToPageCmSections(tmpPage.cms_sections)];
    delete (tmpPage as any).cms_sections;
    return ({
      ...tmpPage,
      cmsSections,
      type: (tmpPage.type || '').replace('Spree::Cms::Pages::', '')
    })
  }
}

export class PageCmsSectionMapper {
  static mapSpreeCmsSectionToPageCmSection(pageSection: SpreePageCmsSection): PageCmsSection {
    const type: string = (pageSection.type || '').replace('Spree::Cms::Sections::', '') as PageCmsSectionTypeEnum;
    if (type === PageCmsSectionTypeEnum.ImageGallery || type === PageCmsSectionTypeEnum.SideBySideImages) {
      const spreeSubSectionDenominators = ['one', 'two', 'three'];
      return ({
        id: pageSection.id,
        name: pageSection.name,
        position: pageSection.position,
        settings: pageSection.settings,
        type,
        fit: pageSection.fit,
        isFullscreen: pageSection.is_full_screen,
        link: pageSection.link,
        subSections: spreeSubSectionDenominators
          .map(denominator => (
            (pageSection.content as any)[`link_${denominator}`] ||
            (pageSection.content as any)[`link_type_${denominator}`] ||
            (pageSection.content as any)[`title_${denominator}`] ||
            (
            (pageSection as any)[`img_${denominator}_lg`] ||
            (pageSection as any)[`img_${denominator}_md`] ||
            (pageSection as any)[`img_${denominator}_sm`] ||
            (pageSection as any)[`img_${denominator}_xl`]
            ) ?
            {
              link: (pageSection.content as any)[`link_${denominator}`],
              linkType: (pageSection.content as any)[`link_type_${denominator}`],
              title: (pageSection.content as any)[`title_${denominator}`],
              img: (
                (pageSection as any)[`img_${denominator}_lg`] ||
                (pageSection as any)[`img_${denominator}_md`] ||
                (pageSection as any)[`img_${denominator}_sm`] ||
                (pageSection as any)[`img_${denominator}_xl`]
                ) ? {
                lg: (pageSection as any)[`img_${denominator}_lg`],
                md: (pageSection as any)[`img_${denominator}_md`],
                sm: (pageSection as any)[`img_${denominator}_sm`],
                xl: (pageSection as any)[`img_${denominator}_xl`],
              } : undefined
            } : undefined
          ))
          .filter(subSection => !!subSection)
      }) as ImageGalleryPageCmsSection;
    }
    return ({
      ...{...pageSection},
      type,
      link: (pageSection.link || '').replace('/t/', '/')
    }) as PageCmsSection;
  }
  
  static mapSpreeCmsSectionToPageCmSections(pageSections: SpreePageCmsSection[] = []): PageCmsSection[] {
    return pageSections.map(PageCmsSectionMapper.mapSpreeCmsSectionToPageCmSection);
  }
}

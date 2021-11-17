import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PageCmsSectionTypeEnum, PageCmsSection, BasePageCmsSection, ImageGalleryPageCmsSection, PageCmsSubSection } from '@url/shared/types';

@Component({
  selector: 'url-hero-image-section',
  templateUrl: './hero-image-section.component.html',
  styleUrls: ['./hero-image-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroImageSectionComponent {
  @Input() cmsSection?: PageCmsSection;
  pageCmsSectionTypeEnum: typeof PageCmsSectionTypeEnum =  PageCmsSectionTypeEnum;

  get section(): PageCmsSubSection {
    return this.extractSubSection();
  }

  private extractSubSection(): PageCmsSubSection {
    const section = this.cmsSection as ImageGalleryPageCmsSection;
    let heroImageSection: PageCmsSubSection = section as any;
    if ((section.subSections || []).length > 0) {
      heroImageSection = section.subSections[0];
    }
    return heroImageSection;
  }
}

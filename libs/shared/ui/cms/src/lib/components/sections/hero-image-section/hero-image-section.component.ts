import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PageCmsSectionTypeEnum, PageCmsSection, BasePageCmsSection } from '@url/shared/types';

@Component({
  selector: 'url-hero-image-section',
  templateUrl: './hero-image-section.component.html',
  styleUrls: ['./hero-image-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroImageSectionComponent {
  @Input() cmsSection?: PageCmsSection;
  pageCmsSectionTypeEnum: typeof PageCmsSectionTypeEnum =  PageCmsSectionTypeEnum;

  get section(): BasePageCmsSection {
    return this.cmsSection as BasePageCmsSection
  }
}

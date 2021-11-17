import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PageCmsSectionTypeEnum, PageCmsSection, BasePageCmsSection } from '@url/shared/types';

@Component({
  selector: 'url-cms-section',
  templateUrl: './cms-section.component.html',
  styleUrls: ['./cms-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsSectionComponent  {
  @Input() cmsSection?: PageCmsSection;
  @Input() noImagePlaceholder?: string;
  pageCmsSectionTypeEnum: typeof PageCmsSectionTypeEnum =  PageCmsSectionTypeEnum;

  get section(): BasePageCmsSection {
    return this.cmsSection as BasePageCmsSection
  }
}

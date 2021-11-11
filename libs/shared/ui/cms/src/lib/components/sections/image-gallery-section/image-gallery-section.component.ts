import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PageCmsSectionTypeEnum, PageCmsSection, ImageGalleryPageCmsSection } from '@url/shared/types';

@Component({
  selector: 'url-image-gallery-section',
  templateUrl: './image-gallery-section.component.html',
  styleUrls: ['./image-gallery-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageGallerySectionComponent {
  @Input() cmsSection?: PageCmsSection;
  pageCmsSectionTypeEnum: typeof PageCmsSectionTypeEnum =  PageCmsSectionTypeEnum;
  
  get section(): ImageGalleryPageCmsSection {
    return this.cmsSection as ImageGalleryPageCmsSection
  }
}

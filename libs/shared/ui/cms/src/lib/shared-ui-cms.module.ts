import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsSectionComponent,
  HeroImageSectionComponent,
  ImageGallerySectionComponent,
  ListPreviewCardComponent,
  ListPreviewCardLoaderPlacehloderComponent
} from './components';
import { RouterModule } from '@angular/router';

export const COMPONENTS = [
  CmsSectionComponent,
  HeroImageSectionComponent,
  ImageGallerySectionComponent,
  ListPreviewCardLoaderPlacehloderComponent,
  ListPreviewCardComponent,
  ListPreviewCardLoaderPlacehloderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class SharedUiCmsModule {}

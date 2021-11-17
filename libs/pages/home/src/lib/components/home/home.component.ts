import { Component } from '@angular/core';
import { StorefrontSdkService } from '@url/sdk/storefront';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Page, PageCmsSectionTypeEnum } from '@url/shared/types';
import { noImagePlaceholder } from '../../pages-home.module';

@Component({
  selector: 'url-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  page: Observable<Page>;
  loading = false;
  pageCmsSectionTypeEnum = PageCmsSectionTypeEnum;
  noImagePlaceholder = noImagePlaceholder;

  constructor(private sdkService: StorefrontSdkService) {
    this.loading = true;
    this.page = this.sdkService.homePage().pipe(
      tap(() => this.loading = false)
    );
  }
}

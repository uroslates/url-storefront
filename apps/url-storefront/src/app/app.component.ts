import { Component } from '@angular/core';
import { StorefrontSdkService } from '@url/sdk/storefront';
import { Observable } from 'rxjs';
import { Category } from '@url/shared/types';
import { environment } from '../environments/environment';

@Component({
  selector: 'url-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = environment.storeName || 'Demo Store';
  categories: Observable<Category[]>;

  constructor(private sdkService: StorefrontSdkService) {
    // Due to pluggable 3rd Party StorefrontSdkServices we're avoiding
    // arguments below (expected that each StorefrontSdkService provides topCatgories endpiont)
    // returning stored Top Categries back (as workaround hardcodded in respectable @url/sdk/xxx services)
    this.categories = this.sdkService.topCategories();
  }
}

import { Component } from '@angular/core';
import { StorefrontSdkService } from '@url/sdk/storefront';
import { Observable } from 'rxjs';
import { Category } from '@url/shared/types';
import { environment } from '../environments/environment';
import { CartStoreService } from '@url/pages/cart';

@Component({
  selector: 'url-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = environment.storeName || 'Demo Store';
  categories: Observable<Category[]>;
  cart$ = this.cardStore.vm$;
  isShowMenu = false;

  constructor(
    private sdkService: StorefrontSdkService,
    private cardStore: CartStoreService,
  ) {
    // Due to pluggable 3rd Party StorefrontSdkServices we're avoiding
    // arguments below (expected that each StorefrontSdkService provides topCatgories endpiont)
    // returning stored Top Categries back (as workaround hardcodded in respectable @url/sdk/xxx services)
    this.categories = this.sdkService.topCategories();
  }

  toggleMenu(event: MouseEvent, isShowMenu?: boolean) {
    event.stopPropagation();
    this.isShowMenu = isShowMenu || !this.isShowMenu;
  }
}

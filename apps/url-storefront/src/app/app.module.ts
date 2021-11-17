import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SdkStorefrontModule, StorefrontSdkService } from '@url/sdk/storefront';
import { SdkSpreeModule, SpreeStorefrontSdkService, MockedSpreeStorefrontSdkService } from '@url/sdk/spree';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SdkStorefrontModule,
    SdkSpreeModule.forRoot(environment.spree),
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          loadChildren: () => import('@url/pages/home').then((module) => module.PagesHomeModule),
        },
        {
          path: 'categories',
          loadChildren: () => import('@url/pages/category').then((module) => module.PagesCategoryModule),
        },
        {
          path: 'products',
          loadChildren: () => import('@url/pages/product').then((module) => module.PagesProductModule),
        },
        {
          path: 'cart',
          loadChildren: () => import('@url/pages/cart').then((module) => module.PagesCartModule),
        },
      ],
      { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    {
      provide: StorefrontSdkService,
      // Uncomment below for for Github Pages hosting purposes use Mocked Responses
      // useClass: MockedSpreeStorefrontSdkService
      // Uncomment below for proxying to real Spree BackEnd instance
      useClass: environment.spree.isUseApiMock ? MockedSpreeStorefrontSdkService : SpreeStorefrontSdkService
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISpreeConfig, SpreeConfig, SpreeStorefrontSdkService } from './services/spree-storefront-sdk.service';
import { SharedTypesModule } from '@url/shared/types';
import { SdkStorefrontModule } from '@url/sdk/storefront';

@NgModule({
  imports: [
    CommonModule,
    SharedTypesModule,
    SdkStorefrontModule
  ],
})
export class SdkSpreeModule {

  static forRoot(config: ISpreeConfig): ModuleWithProviders<SdkSpreeModule> {
    return {
      ngModule: SdkSpreeModule,
      providers: [
        SpreeStorefrontSdkService,
        {
          provide: SpreeConfig,
          useValue: config
        }
      ]
    }
  }

}

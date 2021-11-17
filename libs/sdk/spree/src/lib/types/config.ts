import { InjectionToken } from "@angular/core";

export interface ISpreeConfig {
  host: string;
  imagePrefix: string;
  noImagePlaceholder: string;
  isUseApiMock?: boolean;
}
export const SpreeConfig = new InjectionToken<ISpreeConfig>('SpreeConfig');

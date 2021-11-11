import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product } from '@url/shared/types';

@Component({
  selector: 'url-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListCardComponent {
  @Input() product?: Product;

  get defaultImageOriginalUrl(): string {
    const images = (this.product || {}).images || [];
    return images.length ? images[0].originalUrl : '';
  }

  get title(): string {
    return (this.product || {}).name || '';
  }

  get subTitle(): string {
    return (this.product || {}).displayPrice || '';
  }

  get link(): string {
    const slug = (this.product || {}).slug || '';
    return `/products/${slug}`;
  }
}

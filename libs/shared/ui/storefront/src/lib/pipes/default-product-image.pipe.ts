import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@url/shared/types';

@Pipe({
  name: 'defaultProductImage'
})
export class DefaultProductImagePipe implements PipeTransform {
  transform(product: Product, _property?: string): string {
    const defaultImage = '';
    const images = (product || {}).images || [];
    if (images.length) {
      return images[0].originalUrl || defaultImage;
    }
    return defaultImage;
  }
}
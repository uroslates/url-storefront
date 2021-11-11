import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product } from '@url/shared/types';

/**
 * Dummy configurable Products list Component.
 * Shows the styled list of products providing configuration
 * for loading state (showing configurable number of placeholders).
 */
@Component({
  selector: 'url-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  @Input() products: Product[] = [];
  @Input() loading = false;
  @Input() placeholdersArray: number[] = [1,2,3,4,5,6];
  @Input() noResultsMessage = 'No Results found!';
}

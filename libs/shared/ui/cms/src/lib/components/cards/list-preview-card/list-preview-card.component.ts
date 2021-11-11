import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'url-list-preview-card',
  templateUrl: './list-preview-card.component.html',
  styleUrls: ['./list-preview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPreviewCardComponent {
  @Input() src?: string;
  @Input() title?: string;
  @Input() routerLink?: string;
  @Input() routerLinkTitle?: string;
  @Input() subTitle?: string;
  @Input() class?: string = ''
}

import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';

export interface UrlSelectOption<T> {
  value: T;
  label: string;
  icon?: string;
}

@Component({
  selector: 'url-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectboxComponent {
  @Input() options: UrlSelectOption<any>[] = [];
  @Input() placeholder = 'Please select from...';
  @Input() selectedValue: any;
  @Output() selected: EventEmitter<UrlSelectOption<any>> = new EventEmitter();
  @Input() isOpened = false;

  constructor(
    private eRef: ElementRef
  ){}

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      // TODO: trigger closing
      this.isOpened = false;
    }
  }
}

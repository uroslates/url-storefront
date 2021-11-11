import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

export interface Breadcrumb {
  routerLink?: string;
  label: string;
}

@Component({
  selector: 'url-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {
  @Input() breadcrumbs?: Breadcrumb[] = [];
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPreviewCardComponent } from './list-preview-card.component';

describe('ListPreviewCardComponent', () => {
  let component: ListPreviewCardComponent;
  let fixture: ComponentFixture<ListPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPreviewCardLoaderPlacehloderComponent } from './list-preview-card-loader-placehloder.component';

describe('ListPreviewCardLoaderPlacehloderComponent', () => {
  let component: ListPreviewCardLoaderPlacehloderComponent;
  let fixture: ComponentFixture<ListPreviewCardLoaderPlacehloderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPreviewCardLoaderPlacehloderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPreviewCardLoaderPlacehloderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

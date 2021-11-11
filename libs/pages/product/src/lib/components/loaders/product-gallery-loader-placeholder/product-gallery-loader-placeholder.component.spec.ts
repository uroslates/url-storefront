import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGalleryLoaderPlaceholderComponent } from './product-gallery-loader-placeholder.component';

describe('ProductGalleryLoaderPlaceholderComponent', () => {
  let component: ProductGalleryLoaderPlaceholderComponent;
  let fixture: ComponentFixture<ProductGalleryLoaderPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGalleryLoaderPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGalleryLoaderPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

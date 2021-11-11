import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsLoaderPlaceholderComponent } from './product-details-loader-placeholder.component';

describe('ProductDetailsLoaderPlaceholderComponent', () => {
  let component: ProductDetailsLoaderPlaceholderComponent;
  let fixture: ComponentFixture<ProductDetailsLoaderPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsLoaderPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsLoaderPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

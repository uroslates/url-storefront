import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGallerySectionComponent } from './image-gallery-section.component';

describe('ImageGallerySectionComponent', () => {
  let component: ImageGallerySectionComponent;
  let fixture: ComponentFixture<ImageGallerySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGallerySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGallerySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

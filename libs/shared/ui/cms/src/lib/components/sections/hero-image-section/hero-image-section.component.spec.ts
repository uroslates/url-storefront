import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageSectionComponent } from './hero-image-section.component';

describe('HeroImageSectionComponent', () => {
  let component: HeroImageSectionComponent;
  let fixture: ComponentFixture<HeroImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroImageSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoaderPlaceholderComponent } from './home-loader-placeholder.component';

describe('HomeLoaderPlaceholderComponent', () => {
  let component: HomeLoaderPlaceholderComponent;
  let fixture: ComponentFixture<HomeLoaderPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLoaderPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoaderPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

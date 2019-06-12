import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayOutCarouselComponent } from './lay-out-carousel.component';

describe('LayOutCarouselComponent', () => {
  let component: LayOutCarouselComponent;
  let fixture: ComponentFixture<LayOutCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayOutCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayOutCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

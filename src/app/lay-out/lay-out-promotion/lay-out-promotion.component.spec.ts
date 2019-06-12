import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayOutPromotionComponent } from './lay-out-promotion.component';

describe('LayOutPromotionComponent', () => {
  let component: LayOutPromotionComponent;
  let fixture: ComponentFixture<LayOutPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayOutPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayOutPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

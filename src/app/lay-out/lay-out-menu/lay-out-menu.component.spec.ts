import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayOutMenuComponent } from './lay-out-menu.component';

describe('LayOutMenuComponent', () => {
  let component: LayOutMenuComponent;
  let fixture: ComponentFixture<LayOutMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayOutMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayOutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

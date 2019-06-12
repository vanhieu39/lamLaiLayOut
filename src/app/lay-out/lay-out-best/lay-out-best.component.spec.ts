import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayOutBestComponent } from './lay-out-best.component';

describe('LayOutBestComponent', () => {
  let component: LayOutBestComponent;
  let fixture: ComponentFixture<LayOutBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayOutBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayOutBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

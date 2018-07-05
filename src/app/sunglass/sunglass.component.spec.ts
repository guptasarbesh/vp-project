import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunglassComponent } from './sunglass.component';

describe('SunglassComponent', () => {
  let component: SunglassComponent;
  let fixture: ComponentFixture<SunglassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunglassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunglassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

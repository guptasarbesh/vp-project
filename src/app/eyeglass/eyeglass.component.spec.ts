import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeglassComponent } from './eyeglass.component';

describe('EyeglassComponent', () => {
  let component: EyeglassComponent;
  let fixture: ComponentFixture<EyeglassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyeglassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeglassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

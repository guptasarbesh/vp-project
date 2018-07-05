import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LensesComponent } from './lenses.component';

describe('LensesComponent', () => {
  let component: LensesComponent;
  let fixture: ComponentFixture<LensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedreportComponent } from './issuedreport.component';

describe('IssuedreportComponent', () => {
  let component: IssuedreportComponent;
  let fixture: ComponentFixture<IssuedreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuedreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

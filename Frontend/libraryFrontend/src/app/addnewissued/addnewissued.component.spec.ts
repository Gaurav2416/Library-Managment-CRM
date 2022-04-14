import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewissuedComponent } from './addnewissued.component';

describe('AddnewissuedComponent', () => {
  let component: AddnewissuedComponent;
  let fixture: ComponentFixture<AddnewissuedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewissuedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewissuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

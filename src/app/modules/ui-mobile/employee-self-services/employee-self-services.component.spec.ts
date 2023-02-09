import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSelfServicesComponent } from './employee-self-services.component';

describe('EmployeeSelfServicesComponent', () => {
  let component: EmployeeSelfServicesComponent;
  let fixture: ComponentFixture<EmployeeSelfServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSelfServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSelfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

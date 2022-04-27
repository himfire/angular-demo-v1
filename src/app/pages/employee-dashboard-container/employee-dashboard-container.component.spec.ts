import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDashboardContainerComponent } from './employee-dashboard-container.component';

describe('EmployeeDashboardContainerComponent', () => {
  let component: EmployeeDashboardContainerComponent;
  let fixture: ComponentFixture<EmployeeDashboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDashboardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

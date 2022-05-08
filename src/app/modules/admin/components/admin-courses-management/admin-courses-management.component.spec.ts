import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesManagementComponent } from './admin-courses-management.component';

describe('AdminCoursesManagementComponent', () => {
  let component: AdminCoursesManagementComponent;
  let fixture: ComponentFixture<AdminCoursesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoursesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoursesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

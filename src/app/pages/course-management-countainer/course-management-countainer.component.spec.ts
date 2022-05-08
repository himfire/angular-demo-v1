import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseManagementCountainerComponent } from './course-management-countainer.component';

describe('CourseManagementCountainerComponent', () => {
  let component: CourseManagementCountainerComponent;
  let fixture: ComponentFixture<CourseManagementCountainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseManagementCountainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseManagementCountainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

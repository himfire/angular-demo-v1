import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseContainerComponent } from './teacher-course-container.component';

describe('TeacherCourseContainerComponent', () => {
  let component: TeacherCourseContainerComponent;
  let fixture: ComponentFixture<TeacherCourseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCourseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

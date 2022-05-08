import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNewCourseContentComponent } from './teacher-new-course-content.component';

describe('TeacherNewCourseContentComponent', () => {
  let component: TeacherNewCourseContentComponent;
  let fixture: ComponentFixture<TeacherNewCourseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherNewCourseContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherNewCourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

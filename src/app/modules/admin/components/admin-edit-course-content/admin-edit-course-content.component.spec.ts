import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditCourseContentComponent } from './admin-edit-course-content.component';

describe('AdminEditCourseContentComponent', () => {
  let component: AdminEditCourseContentComponent;
  let fixture: ComponentFixture<AdminEditCourseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditCourseContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditCourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

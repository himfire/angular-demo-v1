import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewCourseContentComponent } from './admin-new-course-content.component';

describe('AdminNewCourseContentComponent', () => {
  let component: AdminNewCourseContentComponent;
  let fixture: ComponentFixture<AdminNewCourseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewCourseContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewCourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

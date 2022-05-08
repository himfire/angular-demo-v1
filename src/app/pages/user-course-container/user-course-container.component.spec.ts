import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseContainerComponent } from './user-course-container.component';

describe('UserCourseContainerComponent', () => {
  let component: UserCourseContainerComponent;
  let fixture: ComponentFixture<UserCourseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCourseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

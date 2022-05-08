import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesManagementCountainerComponent } from './courses-management-countainer.component';

describe('CoursesManagementCountainerComponent', () => {
  let component: CoursesManagementCountainerComponent;
  let fixture: ComponentFixture<CoursesManagementCountainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesManagementCountainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesManagementCountainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

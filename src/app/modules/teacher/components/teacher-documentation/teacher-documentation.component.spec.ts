import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDocumentationComponent } from './teacher-documentation.component';

describe('TeacherDocumentationComponent', () => {
  let component: TeacherDocumentationComponent;
  let fixture: ComponentFixture<TeacherDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherDocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

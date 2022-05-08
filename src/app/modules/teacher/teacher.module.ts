import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { TeacherDocumentationComponent } from './components/teacher-documentation/teacher-documentation.component';
import {TeacherNewCourseContentComponent} from "./components/teacher-new-course-content/teacher-new-course-content.component";
import {TeacherDashboardComponent} from "./components/teacher-dashboard/teacher-dashboard.component";
import {CourseManagementComponent} from "../../pages/course-management/course-management.component";
import {TeacherSettingsComponent} from "../../pages/teacher-settings/teacher-settings.component";
import {TeacherCourseContainerComponent} from "../../pages/teacher-course-container/teacher-course-container.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {CourseService} from "../../service/course.service";
import {LessonsService} from "../../service/lessons.service";
import { TeacherCourseDetailsComponent } from './components/teacher-course-details/teacher-course-details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "../../shared/interceptors/jwt.interceptor";


@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    UserService, AuthService,CourseService,LessonsService,
  ],
  declarations: [
    TeacherComponent,
    TeacherDocumentationComponent,
    TeacherNewCourseContentComponent,
    TeacherDashboardComponent,
    TeacherSettingsComponent,
    TeacherCourseDetailsComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TeacherModule { }

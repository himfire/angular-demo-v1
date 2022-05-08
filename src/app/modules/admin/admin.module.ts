import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {AdminNewCourseComponent} from "./components/admin-new-course/admin-new-course.component";
import {TeacherSettingsComponent} from "../../pages/teacher-settings/teacher-settings.component";
import {TeacherDashboardComponent} from "../teacher/components/teacher-dashboard/teacher-dashboard.component";
import {TeacherCourseContainerComponent} from "../../pages/teacher-course-container/teacher-course-container.component";
import {AdminSettingsComponent} from "./components/admin-settings/admin-settings.component";
import {AdminCoursesManagementComponent} from "./components/admin-courses-management/admin-courses-management.component";
import {AdminCourseContentComponent} from "./components/admin-course-content/admin-course-content.component";
import {AdminEditCourseComponent} from "./components/admin-edit-course/admin-edit-course.component";
import {AdminEditCourseContentComponent} from "./components/admin-edit-course-content/admin-edit-course-content.component";
import {AdminNewCourseContentComponent} from "./components/admin-new-course-content/admin-new-course-content.component";
import {JwtInterceptor} from "../../shared/interceptors/jwt.interceptor";


@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AuthService, UserService
  ],
  declarations: [
    AdminComponent,
    AdminNewCourseComponent,
    AdminSettingsComponent,
    AdminCoursesManagementComponent,
    AdminCourseContentComponent,
    AdminEditCourseComponent,
    AdminEditCourseContentComponent,
    AdminNewCourseContentComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {LoginComponent} from "./components/login/login.component";
import {AboutComponent} from "./components/about/about.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {InstructorsComponent} from "./components/instructors/instructors.component";
import {ContactComponent} from "./components/contact/contact.component";
import {HomeContainerComponent} from "../../pages/home-container/home-container.component";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {SignupComponent} from "./components/signup/signup.component";
import {DashboardComponent} from "../user/components/dashboard/dashboard.component";
import {OurTeamComponent} from "./components/our-team/our-team.component";
import {DashboardContainerComponent} from "../user/components/dashboard-container/dashboard-container.component";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {AdminDashboardContainerComponent} from "../admin/components/admin-dashboard-container/admin-dashboard-container.component";
import {EmployeeDashboardContainerComponent} from "../../pages/employee-dashboard-container/employee-dashboard-container.component";
import {EmployeeDashboardComponent} from "../../pages/employee-dashboard/employee-dashboard.component";
import {AdminDashboardComponent} from "../admin/components/admin-dashboard/admin-dashboard.component";
import {SettingsComponent} from "../user/components/settings/settings.component";
import {AccountComponent} from "../../pages/account/account.component";
import {CourseComponent} from "./components/course/course.component";
import {LessonComponent} from "../../pages/lesson/lesson.component";
import {BlogsComponent} from "./components/blogs/blogs.component";
import {BlogComponent} from "./components/blog/blog.component";
import {VerifyAccountComponent} from "./components/verify-account/verify-account.component";
import {UserCourseContainerComponent} from "../../pages/user-course-container/user-course-container.component";
import {CourseContainerComponent} from "../../pages/course-container/course-container.component";
import {CourseManagementComponent} from "../../pages/course-management/course-management.component";
import {CoursesManagementCountainerComponent} from "../../pages/courses-management-countainer/courses-management-countainer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ClassificationService} from "../../service/classification.service";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";
import {LessonsService} from "../../service/lessons.service";
import {JwtInterceptor} from "../../shared/interceptors/jwt.interceptor";


@NgModule({
  providers :[
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ClassificationService, AuthService, UserService,LessonsService
  ],
  declarations: [
    HomeComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    CoursesComponent,
    InstructorsComponent,
    ContactComponent,
    LoginComponent,
    HomeContainerComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    DashboardComponent,
    OurTeamComponent,
    DashboardContainerComponent,
    ProfileComponent,
    AdminDashboardContainerComponent,
    EmployeeDashboardContainerComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    SettingsComponent,
    AccountComponent,
    CourseComponent,
    LessonComponent,
    BlogsComponent,
    BlogComponent,
    VerifyAccountComponent,
    UserCourseContainerComponent,
    CourseContainerComponent,
    CourseManagementComponent,
    CoursesManagementCountainerComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }

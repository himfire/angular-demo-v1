import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { InstructorsComponent } from './pages/instructors/instructors.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeContainerComponent } from './pages/home-container/home-container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {CorsFixInterceptor} from "./service/interceptors/cors-fix.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { DashboardContainerComponent } from './pages/dashboard-container/dashboard-container.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminDashboardContainerComponent } from './pages/admin-dashboard-container/admin-dashboard-container.component';
import { EmployeeDashboardContainerComponent } from './pages/employee-dashboard-container/employee-dashboard-container.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AccountComponent } from './pages/account/account.component';
import { CourseComponent } from './pages/course/course.component';
import { LessonComponent } from './pages/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    InstructorsComponent,
    ContactComponent,
    LoginComponent,
    HomeContainerComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CorsFixInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

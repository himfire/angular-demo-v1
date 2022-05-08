import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {UserGuard} from "../../shared/guards/user.guard";
import {DashboardComponent} from "../user/components/dashboard/dashboard.component";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {SettingsComponent} from "../user/components/settings/settings.component";
import {UserCourseContainerComponent} from "../../pages/user-course-container/user-course-container.component";
import {CourseGuard} from "../../shared/guards/course.guard";
import {AdminGuard} from "../../shared/guards/admin.guard";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {AdminSettingsComponent} from "./components/admin-settings/admin-settings.component";
import {AdminCoursesManagementComponent} from "./components/admin-courses-management/admin-courses-management.component";
import {AdminEditCourseComponent} from "./components/admin-edit-course/admin-edit-course.component";
import {AdminNewCourseComponent} from "./components/admin-new-course/admin-new-course.component";
import {AdminNewCourseContentComponent} from "./components/admin-new-course-content/admin-new-course-content.component";

const routes: Routes = [
    { path: '', component: AdminComponent, canActivate: [AdminGuard],children: [
      { path:'', component: AdminDashboardComponent },
      {path:'courses-management', component: AdminCoursesManagementComponent},
      {path:'settings', component: AdminSettingsComponent},
        {path:'courses-management/course/:id/edit', component: AdminEditCourseComponent},
        {path:'courses-management/course/new', component: AdminNewCourseComponent},
        {path:'courses-management/course/:id/content/edit', component: AdminEditCourseComponent},
        {path:'courses-management/course/content/new', component: AdminNewCourseContentComponent},
      {path: 'course/:topic' , component:UserCourseContainerComponent, canActivate: [CourseGuard],children: [
          {path:'lesson/:id', component: DashboardComponent},
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

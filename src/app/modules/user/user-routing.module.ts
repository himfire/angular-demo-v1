import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProfileComponent} from "../../pages/profile/profile.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {UserCourseContainerComponent} from "../../pages/user-course-container/user-course-container.component";
import {CourseGuard} from "../../shared/guards/course.guard";
import {UserGuard} from "../../shared/guards/user.guard";

const routes: Routes = [
    { path: '', component: UserComponent , canActivate: [UserGuard],children: [
      { path:'', component: DashboardComponent },
      {path:'my-profile', component: ProfileComponent},
      {path:'settings', component: SettingsComponent},
      {path: 'course/:topic' , component:UserCourseContainerComponent, canActivate: [CourseGuard],children: [
          {path:'lesson/:id', component: DashboardComponent},
        ]}
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

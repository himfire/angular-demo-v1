import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeacherDashboardComponent} from "./components/teacher-dashboard/teacher-dashboard.component";
import {TeacherComponent} from "./teacher.component";
import {TeacherNewCourseContentComponent} from "./components/teacher-new-course-content/teacher-new-course-content.component";
import {TeacherSettingsComponent} from "../../pages/teacher-settings/teacher-settings.component";
import {TeacherCourseDetailsComponent} from "./components/teacher-course-details/teacher-course-details.component";

const routes: Routes = [
  { path: '', component: TeacherComponent ,children: [
    {path:'', component: TeacherDashboardComponent},
      {path:'courses/new', component: TeacherNewCourseContentComponent},
      {path:'courses/:slugTitle', component: TeacherCourseDetailsComponent},
      {path:'/settings', component: TeacherSettingsComponent},

  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

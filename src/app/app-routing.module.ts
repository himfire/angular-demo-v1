import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsComponent} from "./modules/user/components/settings/settings.component";

const routes: Routes = [



  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },

  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },

  { path: 'teacher', loadChildren: () => import('./modules/teacher/teacher.module').then(m => m.TeacherModule) },

  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },

  {
    path :'**' , redirectTo: 'login'
  }
];
//,{path: 'user-dashboard' , component: DashboardContainerComponent, canActivate: [UserGuard],children: [
//     {path:'', component: DashboardComponent},
//     {path:'my-profile', component: ProfileComponent},
//     {path:'settings', component: SettingsComponent},
//     {path:'account', component: AccountComponent},
//     {path: 'course/:topic' , component:UserCourseContainerComponent, canActivate: [CourseGuard],children: [
//         {path:'lesson/:id', component: DashboardComponent},
//       ]}
//     ]},
// {
//   path :'teacher-dashboard' , component: TeacherDashboardContainerComponent, canActivate: [TeacherGuard],children: [
//     {path:'', component: TeacherDashboardComponent},
//     {path:'my-profile', component: ProfileComponent},
//     {path:'settings', component: SettingsComponent},
//     {path:'account', component: AccountComponent},
//     {path: 'course/:topic' , component:CourseContainerComponent,children: [
//         {path:'lesson/:id', component: DashboardComponent},
//       ]},
//     {path: 'courses-management' , component:CoursesManagementComponent,children: [
//         {path:'course', component: CourseManagementComponent},
//       ]},
//   ]},
// {
//   path :'admin-dashboard' , component: AdminDashboardContainerComponent, canActivate: [AdminGuard],children: [
//     {path:'', component: AdminDashboardComponent},
//     {path:'my-profile', component: ProfileComponent},
//     {path:'settings', component: SettingsComponent},
//     {path:'account', component: AccountComponent},
//     {path: 'course/:topic' , component:CourseContainerComponent,children: [
//         {path:'lesson/:id', component: DashboardComponent},
//       ]},
//   ]},

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

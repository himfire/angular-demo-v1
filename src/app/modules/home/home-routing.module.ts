import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {VerifyAccountComponent} from "./components/verify-account/verify-account.component";
import {LoginComponent} from "./components/login/login.component";
import {AboutComponent} from "./components/about/about.component";
import {InstructorsComponent} from "./components/instructors/instructors.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SignupComponent} from "./components/signup/signup.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {OurTeamComponent} from "./components/our-team/our-team.component";
import {BlogComponent} from "./components/blog/blog.component";
import { WelcomeComponent } from 'src/app/modules/home/components/welcome/welcome.component';
import {CourseComponent} from "./components/course/course.component";

const routes: Routes = [
  { path: '', component: HomeComponent, children : [
    {path:'', component: WelcomeComponent},
    {path:'verify-account/:id/:code', component: VerifyAccountComponent},
    {path:'login', component: LoginComponent},
    {path: 'about' , component:AboutComponent },
    {path: 'instructors' , component:InstructorsComponent },
    {path: 'contact' , component:ContactComponent },
    {path: 'signup' , component:SignupComponent },
    {path: 'courses' , component:CoursesComponent },
      {path: 'c/:name' , component:CourseComponent },
    {path: 'our-team' , component:OurTeamComponent },
    {path: 'blogs/:title' , component:BlogComponent },
  ] },
  { path: 'user', loadChildren: () => import('../../modules/user/user.module').then(m => m.UserModule) },

  { path: 'teacher', loadChildren: () => import('../../modules/teacher/teacher.module').then(m => m.TeacherModule) },

  { path: 'admin', loadChildren: () => import('../../modules/admin/admin.module').then(m => m.AdminModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

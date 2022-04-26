import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {AboutComponent} from "./pages/about/about.component";
import {InstructorsComponent} from "./pages/instructors/instructors.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {HomeContainerComponent} from "./pages/home-container/home-container.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {CoursesComponent} from "./pages/courses/courses.component";

const routes: Routes = [

  {path: '' , component: HomeContainerComponent,children: [
      {path:'', component: HomeComponent},
      {path:'login', component: LoginComponent},
      {path: 'about' , component:AboutComponent },
      {path: 'instructors' , component:InstructorsComponent },
      {path: 'contact' , component:ContactComponent },
      {path: 'signup' , component:SignupComponent },
      {path: 'courses' , component:CoursesComponent },
    ]
  },
  {
    path :'dashboard' , redirectTo: 'login'
  },
  {
    path :'**' , redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

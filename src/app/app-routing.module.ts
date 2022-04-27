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
import {OurTeamComponent} from "./pages/our-team/our-team.component";
import {DashboardContainerComponent} from "./pages/dashboard-container/dashboard-container.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {AccountComponent} from "./pages/account/account.component";
import {AdminDashboardContainerComponent} from "./pages/admin-dashboard-container/admin-dashboard-container.component";
import {AdminDashboardComponent} from "./pages/admin-dashboard/admin-dashboard.component";
import {UserGuard} from "./shared/guards/user.guard";
import {AdminGuard} from "./shared/guards/admin.guard";
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [

  {path: '' , component: HomeContainerComponent, canActivate: [AuthGuard],children: [
      {path:'', component: HomeComponent},
      {path:'login', component: LoginComponent},
      {path: 'about' , component:AboutComponent },
      {path: 'instructors' , component:InstructorsComponent },
      {path: 'contact' , component:ContactComponent },
      {path: 'signup' , component:SignupComponent },
      {path: 'courses' , component:CoursesComponent },
      {path: 'our-team' , component:OurTeamComponent },
    ]
  },{path: 'user-dashboard' , component: DashboardContainerComponent, canActivate: [UserGuard],children: [
      {path:'', component: DashboardComponent},
      {path:'my-profile', component: ProfileComponent},
      {path:'settings', component: SettingsComponent},
      {path:'account', component: AccountComponent},
    ]},
  {
    path :'admin-dashboard' , component: AdminDashboardContainerComponent, canActivate: [AdminGuard],children: [
      {path:'', component: AdminDashboardComponent},
      {path:'my-profile', component: ProfileComponent},
      {path:'settings', component: SettingsComponent},
      {path:'account', component: AccountComponent},
    ]},
  {
    path :'**' , redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

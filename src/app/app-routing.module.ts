import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {LoginGuard} from './guard/login.guard';
const routes: Routes = [
  {path:"login",
  loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule),
  canActivate:[LoginGuard]},
  {path:"dashboard",
  loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule),
  canActivate:[AuthGuard]},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"**",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
